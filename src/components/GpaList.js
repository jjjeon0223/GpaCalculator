import React, { useState } from "react";
import styled from "styled-components";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const GPAListBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
  .tasks-left {
    margin-bottom: 30px;
    color: #20c997;
    font-size: 18px;
    margin-top: 40px;
    font-weight: bold;
  }
  .form {
    margin-bottom: 10px;
  }
  .MuiButton-root {
    margin-right: 30px;
  }
`;

const StyledTextField = styled(TextField)`
  margin-right: 20px;
  .MuiInput-root {
    margin-right: 30px;
    maring-bottom: 20px;
  }
`;

const FormGPA = styled.div`
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
`;

function GPAList() {
  const [gpa, setGpa] = useState([{ gpa: "", gpaCount: "" }]);
  const [currentGpa, setCurrentGpa] = useState(0);
  const [currentGpaCount, setCurrentGpaCount] = useState(0);
  const [gpaCalculate, setGpaCalculate] = useState(0);

  const handleAddFields = () => {
    setGpa([...gpa, { gpa: "", gpaCount: "" }]);
  };

  const handleRemoveFields = () => {
    const values = [...gpa];
    values.splice(values.length - 1, 1);
    setGpa(values);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let currentGpaCalculated = currentGpa * currentGpaCount;
    let currentGPACalCount = currentGpaCount;
    let futureGpa = 0;
    let futureGpaCount = 0;
    gpa.map(
      (gpa) => (
        (futureGpa += parseFloat(gpa.gpa) * parseFloat(gpa.gpaCount)),
        (futureGpaCount += parseInt(gpa.gpaCount))
      )
    );
    console.log(currentGpaCalculated);
    console.log(futureGpa);
    console.log(futureGpaCount);
    console.log(currentGPACalCount);

    console.log(futureGpa + currentGpaCalculated);
    console.log(parseInt(currentGpaCount) + parseInt(futureGpaCount));
    setGpaCalculate(
      (futureGpa + currentGpaCalculated) /
        (parseInt(currentGpaCount) + parseInt(futureGpaCount))
    );
  };

  const handleChangeInput = (index, e) => {
    const values = [...gpa];
    values[index][e.target.name] = e.target.value;
    setGpa(values);
  };

  const handleChangeGPA = (e) => {
    setCurrentGpa(e.target.value);
    // console.log(currentGpa);
  };
  const handleChangeGPACount = (e) => {
    setCurrentGpaCount(e.target.value);
    // console.log(currentGpaCount);
  };

  return (
    <GPAListBlock>
      <div className="tasks-left">
        나의 예상 학점은: {gpaCalculate.toFixed(2)}
      </div>
      <form onSubmit={handleSubmit}>
        <div className="tasks-left">이수 학점 내역</div>
        <StyledTextField
          name="gpa"
          label="학점"
          value={currentGpa.gpa}
          onChange={(e) => handleChangeGPA(e)}
        />
        <StyledTextField
          name="gpa"
          label="학점 수"
          value={currentGpa.gapCount}
          onChange={(e) => handleChangeGPACount(e)}
        />

        <div className="tasks-left">예상 학점 내역</div>
        {gpa.map((inputField, index) => (
          <FormGPA key={index}>
            <StyledTextField
              name="gpa"
              label="학점"
              value={inputField.gpa}
              onChange={(e) => handleChangeInput(index, e)}
            />
            <StyledTextField
              name="gpaCount"
              label="학점 수"
              value={inputField.gpaCount}
              onChange={(e) => handleChangeInput(index, e)}
            />
          </FormGPA>
        ))}
        <Button
          variant="contained"
          color="primary"
          type="submit"
          onClick={handleSubmit}
        >
          확인
        </Button>
        <Button
          variant="contained"
          color="yellow"
          type="submit"
          onClick={() => handleAddFields()}
        >
          학점 추가하기
        </Button>
        <Button
          variant="contained"
          color="yellow"
          type="submit"
          onClick={() => handleRemoveFields()}
        >
          열 지우기
        </Button>
      </form>
    </GPAListBlock>
  );
}

export default GPAList;
