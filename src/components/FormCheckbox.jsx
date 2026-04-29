const FormCheckbox = ({ label, name, defaultValue, size }) => {
  return (
    <div className="form-control items-center flex justify-center">
      <label htmlFor={name} className="label cursor-pointer">
        <span className="label-text capitalize">{label}</span>
      </label>
      <input
        type="checkbox"
        name={name}
        defaultChecked={defaultValue}
        className={`checkbox checkbox-primary ${size} ml-2`}
      />
    </div>
  );
};
export default FormCheckbox;
