class Adder extends Component {
    constructor() {
        super();
        this.state = {
            text: '',
            getInfo: [],
        }
    };


    componentDidMount() {
        fetch('http://localhost:9007/')
            .then(results => {
                return results.json();
            }).then(data => {
                let info = data.results.map((inf) => {
                    return(
                        <li className="icon-floppy">1. PLAYER1 NAME - SCORE: 250</li>
                    )

                });
            this.setState({
                getInfo: first,
            });
            console.log('state', this.state.getInfo);
        })
    }

    render() {
        return (
            <div>
                {this.state.getInfo}
            </div>
        )
    }
}

