"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const HuntedTrollBase = require("../setC13/HuntedTroll.js");

class HuntedTroll extends HuntedTrollBase {
  constructor(game) {
    super(game, "Hunted Troll", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = HuntedTroll;
