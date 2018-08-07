"use strict";
const Constants = require ("../../../Constants");
const SewerNemesisBase = require("../setCM2/SewerNemesis");

class SewerNemesis extends SewerNemesisBase {
  constructor (game) {
    super(game, "Sewer Nemesis", "Commander 2011", "CMD");
  }
}

module.exports = SewerNemesis;
