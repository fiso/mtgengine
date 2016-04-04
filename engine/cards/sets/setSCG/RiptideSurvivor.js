"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const RiptideSurvivorBase = require("../setC14/RiptideSurvivor.js");

class RiptideSurvivor extends RiptideSurvivorBase {
  constructor(game) {
    super(game, "Riptide Survivor", "Scourge", "SCG");
  }
}

module.exports = RiptideSurvivor;
