"use strict";
const Constants = require ("../../../Constants");
const StrionicResonatorBase = require("../setA25/StrionicResonator");

class StrionicResonator extends StrionicResonatorBase {
  constructor (game) {
    super(game, "Strionic Resonator", "Magic 2014", "M14");
  }
}

module.exports = StrionicResonator;
