"use strict";
const Constants = require ("../../../Constants");
const ButchersGleeBase = require("../setIMA/ButchersGlee");

class ButchersGlee extends ButchersGleeBase {
  constructor (game) {
    super(game, "Butcher's Glee", "Dragons of Tarkir", "DTK");
  }
}

module.exports = ButchersGlee;
