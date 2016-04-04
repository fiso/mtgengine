"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BlindingSouleaterBase = require("../setMM2/BlindingSouleater.js");

class BlindingSouleater extends BlindingSouleaterBase {
  constructor(game) {
    super(game, "Blinding Souleater", "New Phyrexia", "NPH");
  }
}

module.exports = BlindingSouleater;
