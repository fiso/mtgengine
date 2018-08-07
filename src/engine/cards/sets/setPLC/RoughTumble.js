"use strict";
const Constants = require ("../../../Constants");
const RoughTumbleBase = require("../setC13/RoughTumble");

class RoughTumble extends RoughTumbleBase {
  constructor (game) {
    super(game, "Rough // Tumble", "Planar Chaos", "PLC");
  }
}

module.exports = RoughTumble;
