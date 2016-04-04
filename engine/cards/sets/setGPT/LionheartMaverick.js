"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const LionheartMaverickBase = require("../setDDG/LionheartMaverick.js");

class LionheartMaverick extends LionheartMaverickBase {
  constructor(game) {
    super(game, "Lionheart Maverick", "Guildpact", "GPT");
  }
}

module.exports = LionheartMaverick;
