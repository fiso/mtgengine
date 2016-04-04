"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SoulFeastBase = require("../set8ED/SoulFeast.js");

class SoulFeast extends SoulFeastBase {
  constructor(game) {
    super(game, "Soul Feast", "Seventh Edition", "7ED");
  }
}

module.exports = SoulFeast;
