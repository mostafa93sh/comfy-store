const FormInput = ({
  label,
  name,
  type,
  defaultValue,
  size,
  className = "",
}) => {
  return (
    <div className="form-control">
      <label htmlFor={name} className="label">
        <span className="label-text capitalize">{label}</span>
      </label>
      <input
        type={type}
        name={name}
        defaultValue={defaultValue}
        className={`input input-bordered ${size} ${className}`}
      />
    </div>
  );
};

export default FormInput;
