import { useEffect, useState } from "react";

import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";

function LocationForm({ getSupplierLocation, supLocation }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    getSupplierLocation({ ...supLocation, [name]: value });
  };

  const [province, setProvince] = useState({
    province_id: 0,
    province_name: "--Select Province--",
  });
  const [district, setDistrict] = useState({
    district_id: 0,
    branch_location: "--Select District--",
  });
  const [city, setCity] = useState({
    city_id: 0,
    city_name: "--Select city--",
  });
  const [provinceList, setProvinceList] = useState([]);
  const [districtList, setDistrictList] = useState([
    { district_id: 0, district_name: "--Select District--" },
  ]);
  const [cityList, setCityList] = useState([
    { city_id: 0, city_name: "--Select City--" },
  ]);

  useEffect(() => {
    getProvinceList();
  }, []);

  useEffect(() => {
    getDistrictList(province);
  }, [province]);

  useEffect(() => {
    getCityList(province, district);
    //getCityList(province, district);
  }, [district]);

  const getProvinceList = async () => {
    try {
      const response = await fetch("http://localhost:5000/province");
      const data = await response.json();
      setProvinceList([
        { province_id: 0, province_name: "--Select Province--" },
        ...data,
      ]);
    } catch (err) {
      console.error(err.message);
    }
  };

  const getDistrictList = async (province) => {
    try {
      if (province.province_id === 0) {
        setDistrict({ district_id: 0, district_name: "--Select District--" });
        return;
      }
      const id = province.province_id;
      //console.log(code);
      const response = await fetch(`http://localhost:5000/province/${id}`);
      const data = await response.json();
      setDistrictList([
        { district_id: 0, district_name: "--Select District--" },
        ...data,
      ]);
    } catch (err) {
      console.error(err.message);
    }
  };

  const getCityList = async (province, district) => {
    console.log(province.province_id, district.district_id);
    try {
      if (district.district_id === 0) {
        setCity({ city_id: 0, district_name: "--Select City--" });
        return;
      }

      const id = district.district_id;
      const dis_id = province.province_id;
      //console.log(code);
      const response = await fetch(
        `http://localhost:5000/province/${dis_id}/${id}`
      );
      const data = await response.json();
      setCityList([{ city_id: 0, city_name: "--Select City--" }, ...data]);
    } catch (err) {
      console.error(err.message);
    }
  };

  const handleSelectProvince = (e) => {
    //console.log(e.target.value);
    //setProvince(e);
    if (e.target.value === "--Select Province--") {
      setDistrictList([
        { district_id: 0, district_name: "--Select District--" },
      ]);
    } else {
      let selectProvince = (province) => {
        let result = provinceList.filter(
          (item) => item.province_name === province
        );
        setProvince(result[0]);
      };
      selectProvince(e.target.value);
      setDistrict({ district_id: 0, district_name: "--Select District--" });
      setCity({ city_id: 0, city_name: "--Select City--" });

      const { name, value } = e.target;
      getSupplierLocation({ ...supLocation, [name]: value });
    }
  };

  const handleSelectDistrict = (e) => {
    if (e.target.value === "--Select District--") {
      setCityList([{ city_id: 0, city_name: "--Select City--" }]);
    } else {
      let selectDistrict = (district) => {
        let result = districtList.filter(
          (item) => item.district_name === district
        );
        setDistrict(result[0]);
      };
      selectDistrict(e.target.value);
      const { name, value } = e.target;
      getSupplierLocation({ ...supLocation, [name]: value });
    }
  };

  const handleSelectCity = (e) => {
    //console.log(e.target.value);
    //setProvince(e);
    let selectCity = (city) => {
      let result = cityList.filter((item) => item.city_name === city);
      setCity(result[0]);
    };
    selectCity(e.target.value);
    const { name, value } = e.target;
    getSupplierLocation({ ...supLocation, [name]: value });
  };

  return (
    <>
      <div className='mt-5'>
        <h4 className='mb-3'>Location Information</h4>
        <Form.Label>Address Line 01</Form.Label>
        <InputGroup className='mb-3'>
          <FormControl
            name='address_01'
            placeholder='Username'
            aria-label='Username'
            aria-describedby='basic-addon1'
            onChange={handleChange}
          />
        </InputGroup>
        <Form.Label>Address Line 02</Form.Label>
        <InputGroup className='mb-3'>
          <FormControl
            name='address_02'
            placeholder='Username'
            aria-label='Username'
            aria-describedby='basic-addon1'
            onChange={handleChange}
          />
        </InputGroup>
        <Form.Group className='mb-3'>
          <Form.Label>Province</Form.Label>
          <Form.Select name='province' onChange={handleSelectProvince}>
            {provinceList.map((item) => (
              <option key={item.province_id}>{item.province_name}</option>
            ))}
          </Form.Select>
        </Form.Group>

        <Form.Group className='mb-3'>
          <Form.Label>District</Form.Label>
          <Form.Select name='district' onChange={handleSelectDistrict}>
            {districtList.map((item) => (
              <option key={item.district_id}>{item.district_name}</option>
            ))}
          </Form.Select>
        </Form.Group>

        <Form.Group className='mb-3'>
          <Form.Label>City</Form.Label>
          <Form.Select name='city' onChange={handleSelectCity}>
            {cityList.map((item) => (
              <option key={item.city_id}>{item.city_name}</option>
            ))}
          </Form.Select>
        </Form.Group>
      </div>
    </>
  );
}

export default LocationForm;
