import React from 'react';

class HomeContainer extends React.Component {
    render() {
        return (
            <div>
                <h1>Home</h1>
                <p>Welcome home!</p>
                {/* <button onClick={() => props.changePage()}>Go to about page via redux</button> */}
            </div>
        )
    }
}
export default HomeContainer;