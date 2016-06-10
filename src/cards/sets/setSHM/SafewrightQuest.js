"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SafewrightQuest extends UnimplementedCard {
  constructor (game) {
    super(game, "Safewright Quest", "Shadowmoor", "SHM");
  }
}

module.exports = SafewrightQuest;
