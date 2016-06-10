"use strict";
const Constants = require ("../../../Constants");
const ArchangelBase = require("../setAVR/Archangel");

class Archangel extends ArchangelBase {
  constructor (game) {
    super(game, "Archangel", "Starter 1999", "S99");
  }
}

module.exports = Archangel;
