"use strict";
const Constants = require ("../../../Constants");
const BlindingSouleaterBase = require("../setMM2/BlindingSouleater");

class BlindingSouleater extends BlindingSouleaterBase {
  constructor(game) {
    super(game, "Blinding Souleater", "New Phyrexia", "NPH");
  }
}

module.exports = BlindingSouleater;
