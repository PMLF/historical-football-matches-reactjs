import React, {Component} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import './MatchHeader.scss';

class MatchHeader extends Component {

    render() {
        return (
            <section className="MatchHeader">
                <div>
                    <img src={this.props.data.teams[0].logo} alt="Home team logo" />
                </div>
                <div className="footage">
                        <FontAwesomeIcon icon={faPlay} />
                    <p>
                        Footage
                    </p>
                </div>
                <div>
                    <img src={this.props.data.teams[1].logo} alt="Away team logo" />
                </div>
            </section>
        );
    }
}

export default MatchHeader;