"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ShadowLance extends Card {
  constructor(game) {
    super(game, "Shadow Lance", "Guildpact", "GPT");
  }
}

module.exports = ShadowLance;
