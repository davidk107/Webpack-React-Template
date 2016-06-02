import React from 'react';

class Paragraph extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="mainParagraph">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas porta tellus nulla, in ullamcorper elit consectetur id. Curabitur massa sapien, cursus quis consectetur in, malesuada ac odio. Nam id urna purus. Aenean eu rhoncus ligula, et dignissim arcu. Ut sagittis elit in massa tincidunt, quis finibus quam finibus. Praesent auctor efficitur neque a dignissim. Vestibulum pretium nunc posuere odio maximus, vel elementum metus suscipit. Vivamus maximus orci dolor, sit amet dapibus dui rhoncus eget. Pellentesque quam massa, vehicula eu feugiat eu, finibus in nunc. Duis dapibus, lectus nec auctor laoreet, lectus turpis ultrices nibh, sed fringilla est sapien ac lorem. Ut rhoncus sem ac laoreet condimentum. Nullam non metus venenatis, pharetra ipsum ut, aliquam ante.
            </div>
        );
    }
}

module.exports = Paragraph;