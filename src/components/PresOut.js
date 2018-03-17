import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class PresOut_ extends Component {
    nextPage(event) {
      event.preventDefault();
      this.props.getPage(this.props.presState, this.props.presState.pageIndex + 1);
    }
    prevPage(event) {
      event.preventDefault();
      this.props.getPage(this.props.presState, this.props.presState.pageIndex - 1);
    }
    render() {
        return (<div>
            {this.props.presState.count === 0 &&
            <h2> No data to display </h2>
            }
            {this.props.presState.count > 0 &&
            <div className="wrapper">
                <div className="table">
                    <table>
                        <tbody>
                        <tr>
                            <th>Slno.</th>
                            <th>stored value</th>
                            <th>stored selection</th>
                        </tr>
                        {
                            Array(this.props.presState.pageIndex*10 <= this.props.presState.count? 10 : this.props.presState.count%10).fill().map((ele,i) => {
                            let index  = ((this.props.presState.pageIndex-1)*10) + i;
                            return(<tr key={index}>
                                <td>{index+1}</td>  
                                <td>{this.props.presState.storedValue[index]}</td>
                                <td>{this.props.presState.storedSelection[index].join(", ")}</td>
                            </tr>)
                            })
                        }
                        </tbody>
                    </table>
                    </div>
                    <div className="paging">
                            <button id="prevPage" disabled={(this.props.presState.pageIndex<=1)} onClick={(event) => this.prevPage(event)}>Prev</button>
                                <label id="PageIdx">{this.props.presState.pageIndex}</label>
                            <button id="nextPage" disabled={(this.props.presState.pageIndex*10>=this.props.presState.count)} onClick={(event) => this.nextPage(event)}>Next</button>
                    </div>
                </div>
            }
        </div>);
    }
}
  
function mapStateToProps({presState}) {
    return {presState};
}
  
const mapDispatchOutToProps = (dispatch) => {
    return { getPage: (data, pageId) => dispatch(actions.getPage(data, pageId)) }
}

const PresOut = connect(mapStateToProps, mapDispatchOutToProps) (PresOut_);
  
export default PresOut;