"use strict";
const Constants = require ("../../../Constants");
const WightofPrecinctSixBase = require("../setIMA/WightofPrecinctSix");

class WightofPrecinctSix extends WightofPrecinctSixBase {
  constructor (game) {
    super(game, "Wight of Precinct Six", "Commander 2016", "C16");
  }
}

module.exports = WightofPrecinctSix;
