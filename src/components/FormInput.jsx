const FormInput = ({ label, name, type, defaultValue }) => {
  return (
    <fieldset className="fieldset w-xs border border-base-300 p-4 rounded">
      <legend className="fieldset-legend capitalize">{label}</legend>
      <input
        type={type}
        name={name}
        defaultValue={defaultValue}
        className="input input-bordered w-full max-w-xs"
      />
    </fieldset>
  );
};

export default FormInput;
