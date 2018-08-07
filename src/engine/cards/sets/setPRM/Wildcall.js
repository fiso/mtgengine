"use strict";
const Constants = require ("../../../Constants");
const WildcallBase = require("../setFRF/Wildcall");

class Wildcall extends WildcallBase {
  constructor (game) {
    super(game, "Wildcall", "Magic Online Promos", "PRM");
  }
}

module.exports = Wildcall;
