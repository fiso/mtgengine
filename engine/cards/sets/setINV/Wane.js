"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const WaneBase = require("../setARC/Wane.js");

class Wane extends WaneBase {
  constructor(game) {
    super(game, "Wane", "Invasion", "INV");
  }
}

module.exports = Wane;
