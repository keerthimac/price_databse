import Select from "react-select";

function ReactSelect() {
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];
  return (
    <div>
      <h1 className='mb-2'>React Select</h1>
      <Select options={options} />
    </div>
  );
}

export default ReactSelect;
