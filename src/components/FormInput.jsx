const FormInput = ({ label, name, type, defaultValue, size }) => {
  return (
    <fieldset className="fieldset w-xs  p-2 rounded">
      <legend className="fieldset-legend capitalize">{label}</legend>
      <input
        type={type}
        name={name}
        defaultValue={defaultValue}
        className={`input input-bordered ${size}`}
      />
    </fieldset>
  );
};

export default FormInput;
