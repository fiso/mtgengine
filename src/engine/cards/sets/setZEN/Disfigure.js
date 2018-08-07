"use strict";
const Constants = require ("../../../Constants");
const DisfigureBase = require("../setA25/Disfigure");

class Disfigure extends DisfigureBase {
  constructor (game) {
    super(game, "Disfigure", "Zendikar", "ZEN");
  }
}

module.exports = Disfigure;
