"use strict";
const Constants = require ("../../../Constants");
const GathanRaidersBase = require("../setARC/GathanRaiders");

class GathanRaiders extends GathanRaidersBase {
  constructor(game) {
    super(game, "Gathan Raiders", "Future Sight", "FUT");
  }
}

module.exports = GathanRaiders;
