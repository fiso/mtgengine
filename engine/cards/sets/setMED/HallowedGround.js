"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const HallowedGroundBase = require("../setICE/HallowedGround.js");

class HallowedGround extends HallowedGroundBase {
  constructor(game) {
    super(game, "Hallowed Ground", "Masters Edition", "MED");
  }
}

module.exports = HallowedGround;
