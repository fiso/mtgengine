"use strict";
const Constants = require ("../../../Constants");
const ArchangelBase = require("../setAVR/Archangel");

class Archangel extends ArchangelBase {
  constructor(game) {
    super(game, "Archangel", "Portal", "POR");
  }
}

module.exports = Archangel;
