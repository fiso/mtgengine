"use strict";
const Constants = require ("../../../Constants");
const OhranViperBase = require("../setCSP/OhranViper");

class OhranViper extends OhranViperBase {
  constructor (game) {
    super(game, "Ohran Viper", "Commander 2015", "C15");
  }
}

module.exports = OhranViper;
