"use strict";
const Constants = require ("../../../Constants");
const CircularLogicBase = require("../setVMA/CircularLogic");

class CircularLogic extends CircularLogicBase {
  constructor (game) {
    super(game, "Circular Logic", "Magic Online Promos", "PRM");
  }
}

module.exports = CircularLogic;
