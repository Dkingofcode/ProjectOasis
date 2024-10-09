import styled from "styled-components";
import PropTypes from "prop-types"; // Import PropTypes for validation

const StyledDataItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;
  padding: 0.8rem 0;
`;

const Label = styled.span`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  font-weight: 500;

  & svg {
    width: 2rem;
    height: 2rem;
    color: var(--color-brand-600);
  }
`;

function DataItem({ icon, label, children }) {
  return (
    <StyledDataItem>
      <Label>
        {icon}
        <span>{label}</span>
      </Label>
      {children}
    </StyledDataItem>
  );
}

// Add PropTypes for validation
DataItem.propTypes = {
  icon: PropTypes.node.isRequired,    // icon can be any renderable node (e.g., React elements)
  label: PropTypes.string.isRequired,  // label should be a string
  children: PropTypes.node,            // children can be any renderable node (optional)
};

export default DataItem;
