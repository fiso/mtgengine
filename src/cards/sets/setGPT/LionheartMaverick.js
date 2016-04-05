"use strict";
const Constants = require ("../../../Constants");
const LionheartMaverickBase = require("../setDDG/LionheartMaverick");

class LionheartMaverick extends LionheartMaverickBase {
  constructor(game) {
    super(game, "Lionheart Maverick", "Guildpact", "GPT");
  }
}

module.exports = LionheartMaverick;
