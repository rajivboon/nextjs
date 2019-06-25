import React from "react";
import DatePicker from "react-datepicker";
import moment from "moment";
import { FormGroup, Button, Label  } from "reactstrap";

import "react-datepicker/dist/react-datepicker.css";



export default class PortDate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dateValue: moment(),
            isHidden: false
        };

        this.handleChange = this.handleChange.bind(this);
    }

    setFieldValueAndTouched(date, touched) {
        const { setFieldValue, setFieldTouched } = this.props.form;
        const { name } = this.props.field;

        setFieldValue(name, date, true);
        setFieldTouched(name, touched, true);
    }

    handleChange(date) {
        
        this.setState({
            dateValue: date
        });

        this.setFieldValueAndTouched(date, true);
        
    }

    ToggleDate(date) {
       
        this.setState({
            isHidden: !this.setState.isHidden
        });
        
        setFieldValueAndTouched(date, true);
    }

    render() {
        const { canBeDisabled, label, field, form: {touched, errors} } = this.props;
        const { isHidden, dateValue } = this.state;
        return (
            <FormGroup>
                <Label>{label} </Label>
                <div className="input-group">
                    {!isHidden && 
                    <DatePicker
                    selected={dateValue}
                    onChange={this.handleChange}
                    peekNextMonth
                    showMonthDropdown
                    showYearDropdown
                    maxDate={moment()}
                    dropdownMode="select"
                    />
                }
                </div>
                {canBeDisabled && !isHidden && <Button onClick={() => this.ToggleDate() }>Still Working Here... </Button> }
                
                {canBeDisabled  && isHidden && 
                    <React.Fragment>
                    <span> Still Working Here</span>
                    <Button onClick={() => this.ToggleDate(dateValue)}>Set End Date</Button>
                    </React.Fragment>
                }
                {touched[field.name] &&
                    errors[field.name] && <div className="error">{errors[field.name]} </div>}
          
            </FormGroup>            
        )
    }
}