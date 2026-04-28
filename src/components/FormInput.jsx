const FormInput = ({ label, name, type, defaultValue }) => {
  return (
    <fieldset className="fieldset w-xs  p-2 rounded">
      <legend className="fieldset-legend capitalize">{label}</legend>
      <input
        type={type}
        name={name}
        defaultValue={defaultValue}
        className="input border px-2 w-full max-w-xs border-base-300"
      />
    </fieldset>
  );
};

export default FormInput;
