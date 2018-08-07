"use strict";
const Constants = require ("../../../Constants");
const CircularLogicBase = require("../setVMA/CircularLogic");

class CircularLogic extends CircularLogicBase {
  constructor (game) {
    super(game, "Circular Logic", "Torment", "TOR");
  }
}

module.exports = CircularLogic;
