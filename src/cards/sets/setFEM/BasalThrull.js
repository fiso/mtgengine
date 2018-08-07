"use strict";
const Constants = require ("../../../Constants");
const BasalThrullBase = require("../setMED/BasalThrull");

class BasalThrull extends BasalThrullBase {
  constructor (game) {
    super(game, "Basal Thrull", "Fallen Empires", "FEM");
  }
}

module.exports = BasalThrull;
