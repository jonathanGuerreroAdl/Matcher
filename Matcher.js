const WMA = require('wma-matching-algorithm'); 
const users = require("./user")
const builders = require("./builders")
const setup_matcher = require("./setup_matcher")



const build = ({data}) => {

    const wma = new WMA(setup_matcher.setup(data));
    console.log("-----inicio ------")
    console.log(wma.match(users.users[0].preferences));
  
};

build(builders)