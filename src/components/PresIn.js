import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

const multiselectList = ["one", "two", "three", "four", "five"];

class PresIn_ extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            textArea: "",
            multiSelect: []
        }
    }
    updateTextArea(event) {
        this.setState({textArea: event.target.value});
    }
    updateMultiSelect(event) {
        this.setState({multiSelect: Array.from(event.target.options)
                    .filter(opt => opt.selected)
                    .map(ele => ele.value)});
    }
    updatePres(event) {
        event.preventDefault();
        this.props.updatePresState(this.props.presState, this.state);
    }
    render() {
        return (<form type="submit" onSubmit={(event) => this.updatePres(event)}>
        <div className="wrapper">
            <div className="onebythree">
                <label htmlFor="taValue" id="lbltext"> Stored value  </label>
                <textarea id="taValue" onBlur={(event) => this.updateTextArea(event)} >
                </textarea>
            </div>
            <div className="twobythree">
                <label htmlFor="selSelection" id="lbltext"> Stored selection  </label>
                <select multiple id="selSelection" onChange={(event) => this.updateMultiSelect(event)}>
                {
                    multiselectList.map((item,i) => <option key={i}>{item}</option>)
                }
                </select>
            </div>
            <div className="threebythree">
                <input type="submit" value="submit"></input>
            </div>
        </div>
        </form>);
    } 
}

function mapStateToProps({presState}) {
    return {presState};
}

const mapDispatchToProps = (dispatch) => {
  return { updatePresState: (data, prevState) => dispatch(actions.updatePresState(data, prevState)) }
}

const PresIn = connect(mapStateToProps, mapDispatchToProps) (PresIn_);

export default PresIn;