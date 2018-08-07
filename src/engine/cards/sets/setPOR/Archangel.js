"use strict";
const Constants = require ("../../../Constants");
const ArchangelBase = require("../setC13/Archangel");

class Archangel extends ArchangelBase {
  constructor (game) {
    super(game, "Archangel", "Portal", "POR");
  }
}

module.exports = Archangel;
