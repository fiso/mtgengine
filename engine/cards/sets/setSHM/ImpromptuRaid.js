"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ImpromptuRaid extends Card {
  constructor(game) {
    super(game, "Impromptu Raid", "Shadowmoor", "SHM");
  }
}

module.exports = ImpromptuRaid;
