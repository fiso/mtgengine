"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BlossomingSandsBase = require("../setFRF/BlossomingSands.js");

class BlossomingSands extends BlossomingSandsBase {
  constructor(game) {
    super(game, "Blossoming Sands", "Khans of Tarkir", "KTK");
  }
}

module.exports = BlossomingSands;
