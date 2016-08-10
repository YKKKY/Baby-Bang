const App = React.createClass({

    render: function () {

        return <div id="container">

                <ul  id="slider" >
                   <a href="http://mall.iqiyi.com"> <li id="first"><img src="../public/imgs/1.jpg"   /></li></a>
                  <a href="http://mall.iqiyi.com">  <li id="second"><img src="../public/imgs/2.jpg" /></li></a>
                   <a href="http://mall.iqiyi.com"> <li id="third"><img src="../public/imgs/3.jpg" /></li></a>
                </ul>
            </div>
    }
});

ReactDOM.render(<App />, document.getElementById('lunbo'));

