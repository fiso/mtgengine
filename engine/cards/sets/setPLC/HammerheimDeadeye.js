"use strict";
const Constants = require ("../../../Constants");
const HammerheimDeadeyeBase = require("../setMMA/HammerheimDeadeye");

class HammerheimDeadeye extends HammerheimDeadeyeBase {
  constructor(game) {
    super(game, "Hammerheim Deadeye", "Planar Chaos", "PLC");
  }
}

module.exports = HammerheimDeadeye;
