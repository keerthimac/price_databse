import Card from "../shared/Card";

function SupplierDirectory() {
  return (
    <div>
      {" "}
      <Card>
        <div className='num-display'>05</div>
        <button onClick={() => deleteFeedback(item.id)} className='close'>
          <FaTimes />
        </button>
        <div className='text-display'>{item.text}</div>
      </Card>
    </div>
  );
}

export default SupplierDirectory;
