"use strict";
const Constants = require ("../../../Constants");
const EmeraldMedallionBase = require("../setCMA/EmeraldMedallion");

class EmeraldMedallion extends EmeraldMedallionBase {
  constructor (game) {
    super(game, "Emerald Medallion", "Commander 2014", "C14");
  }
}

module.exports = EmeraldMedallion;
