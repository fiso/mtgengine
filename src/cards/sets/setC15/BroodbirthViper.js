"use strict";
const Constants = require ("../../../Constants");
const BroodbirthViperBase = require("../setPZ1/BroodbirthViper");

class BroodbirthViper extends BroodbirthViperBase {
  constructor (game) {
    super(game, "Broodbirth Viper", "Commander 2015", "C15");
  }
}

module.exports = BroodbirthViper;
