import styled from "styled-components";
import PropTypes from "prop-types"; // Import PropTypes for validation

const StyledCheckbox = styled.div`
  display: flex;
  gap: 1.6rem;

  & input[type="checkbox"] {
    height: 2.4rem;
    width: 2.4rem;
    outline-offset: 2px;
    transform-origin: 0;
    accent-color: var(--color-brand-600);
  }

  & input[type="checkbox"]:disabled {
    accent-color: var(--color-brand-600);
  }

  & label {
    flex: 1;
    display: flex;
    align-items: center;
    gap: 0.8rem;
  }
`;

function Checkbox({ checked, onChange, disabled = false, id, children }) {
  return (
    <StyledCheckbox>
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={onChange}
        disabled={disabled}
      />
      <label htmlFor={!disabled ? id : ""}>{children}</label>
    </StyledCheckbox>
  );
}

// Add PropTypes for validation
Checkbox.propTypes = {
  checked: PropTypes.bool.isRequired,          // checked should be a boolean
  onChange: PropTypes.func.isRequired,         // onChange should be a function
  disabled: PropTypes.bool,                     // disabled should be a boolean (optional)
  id: PropTypes.string.isRequired,              // id should be a string
  children: PropTypes.node.isRequired,          // children should be a renderable node
};

export default Checkbox;
