"use strict";
const Constants = require ("../../../Constants");
const ForeseeBase = require("../setM11/Foresee");

class Foresee extends ForeseeBase {
  constructor (game) {
    super(game, "Foresee", "Future Sight", "FUT");
  }
}

module.exports = Foresee;
