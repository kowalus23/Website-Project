const CSSTransitionGroup = React.addons.CSSTransitionGroup;

class Box extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isShown: true
        }
    };

    handleClick() {
        this.setState({ isShown: !this.state.isShown })
    }

    SlideBox() {
        return (
            <div id="box" key="key">{this.props.text}</div>
        )
    }

    render() {
        let btnText = this.state.isShown ? 'hide' : 'show';
        let component = this.state.isShown ? this.SlideBox() : '';

        return (
            <div className="container">
                <button type="button" id="btn" onClick={this.handleClick.bind(this)}>
                    {btnText}
                </button>

                <CSSTransitionGroup
                    transitionName="slide"
                    transitionAppear={true}
                    transitionAppearTimeout={500}
                    transitionEnterTimeout={300}
                    transitionLeaveTimeout={300}
                >
                    {component}
                </CSSTransitionGroup>
            </div>
        )
    }
}

const text = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium architecto deleniti dolor doloribus enim hic illo iste non, numquam quas quod repellat reprehenderit rerum sunt, totam vel vero voluptates! Adipisci commodi distinctio eos esse, est harum impedit in quis similique, tenetur unde, vero. Atque dignissimos eaque esse ex, fuga hic id ipsam mollitia, odit officia perferendis quos ratione repudiandae sed suscipit tenetur vero voluptas voluptatibus. Asperiores blanditiis eos esse explicabo fuga illo iure libero molestias pariatur quia quibusdam quis sequi totam vel, voluptas. Aliquam beatae dolor ducimus in, laborum laudantium magnam quae quasi quia, quo, quos soluta tempora tempore totam.`;

window.addEventListener('DOMContentLoaded', function () {
    ReactDOM.render(<Box text={text}/>, document.getElementById('entry'))
});