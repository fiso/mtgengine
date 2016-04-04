"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const HammerheimDeadeyeBase = require("../setMMA/HammerheimDeadeye.js");

class HammerheimDeadeye extends HammerheimDeadeyeBase {
  constructor(game) {
    super(game, "Hammerheim Deadeye", "Planar Chaos", "PLC");
  }
}

module.exports = HammerheimDeadeye;
