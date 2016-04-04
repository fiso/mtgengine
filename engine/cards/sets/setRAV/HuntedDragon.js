"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const HuntedDragonBase = require("../setC15/HuntedDragon.js");

class HuntedDragon extends HuntedDragonBase {
  constructor(game) {
    super(game, "Hunted Dragon", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = HuntedDragon;
