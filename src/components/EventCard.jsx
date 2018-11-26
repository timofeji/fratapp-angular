import React from "react";

const EventCard = (props) => {
    return (
        <div class="card col s4">
            <div class="card-image waves-effect waves-block waves-light">
                <img class="activator" src={props.imgURL} />
            </div>

            <div class="card-content">
                <span class="card-title activator grey-text text-darken-4">
                    {props.name}
                    <i class="material-icons right">more_vert</i>
                </span>
                <p><a href={props.eventURL}>details</a></p>
            </div>
            <div class="card-reveal">
                <span class="card-title grey-text text-darken-4">Card Title<i class="material-icons right">close</i></span>
                <p>{props.description}</p>
            </div>
        </div>
    )
}

export default EventCard;