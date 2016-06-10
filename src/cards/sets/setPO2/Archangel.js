"use strict";
const Constants = require ("../../../Constants");
const ArchangelBase = require("../setAVR/Archangel");

class Archangel extends ArchangelBase {
  constructor (game) {
    super(game, "Archangel", "Portal Second Age", "PO2");
  }
}

module.exports = Archangel;
