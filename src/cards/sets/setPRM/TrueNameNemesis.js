"use strict";
const Constants = require ("../../../Constants");
const TrueNameNemesisBase = require("../setBBD/TrueNameNemesis");

class TrueNameNemesis extends TrueNameNemesisBase {
  constructor (game) {
    super(game, "True-Name Nemesis", "Magic Online Promos", "PRM");
  }
}

module.exports = TrueNameNemesis;
