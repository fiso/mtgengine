"use strict";
const Constants = require ("../../../Constants");
const CircularLogicBase = require("../setVMA/CircularLogic");

class CircularLogic extends CircularLogicBase {
  constructor (game) {
    super(game, "Circular Logic", "Friday Night Magic 2006", "F06");
  }
}

module.exports = CircularLogic;
