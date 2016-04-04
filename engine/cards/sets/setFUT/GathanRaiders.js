"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GathanRaidersBase = require("../setARC/GathanRaiders.js");

class GathanRaiders extends GathanRaidersBase {
  constructor(game) {
    super(game, "Gathan Raiders", "Future Sight", "FUT");
  }
}

module.exports = GathanRaiders;
