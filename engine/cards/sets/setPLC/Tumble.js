"use strict";
const Constants = require ("../../../Constants");
const TumbleBase = require("../setC13/Tumble");

class Tumble extends TumbleBase {
  constructor(game) {
    super(game, "Tumble", "Planar Chaos", "PLC");
  }
}

module.exports = Tumble;
