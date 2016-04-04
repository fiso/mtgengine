"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SkyblinderStaff extends Card {
  constructor(game) {
    super(game, "Skyblinder Staff", "Gatecrash", "GTC");
  }
}

module.exports = SkyblinderStaff;
