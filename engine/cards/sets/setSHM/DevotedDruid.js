"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DevotedDruid extends Card {
  constructor(game) {
    super(game, "Devoted Druid", "Shadowmoor", "SHM");
  }
}

module.exports = DevotedDruid;
