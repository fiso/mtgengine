"use strict";
const Constants = require ("../../../Constants");
const TrueNameNemesisBase = require("../setBBD/TrueNameNemesis");

class TrueNameNemesis extends TrueNameNemesisBase {
  constructor (game) {
    super(game, "True-Name Nemesis", "Commander 2013", "C13");
  }
}

module.exports = TrueNameNemesis;
