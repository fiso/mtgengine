"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const FloodBase = require("../setBRB/Flood.js");

class Flood extends FloodBase {
  constructor(game) {
    super(game, "Flood", "The Dark", "DRK");
  }
}

module.exports = Flood;
