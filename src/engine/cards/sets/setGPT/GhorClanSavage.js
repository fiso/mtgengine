"use strict";
const Constants = require ("../../../Constants");
const GhorClanSavageBase = require("../setDDL/GhorClanSavage");

class GhorClanSavage extends GhorClanSavageBase {
  constructor (game) {
    super(game, "Ghor-Clan Savage", "Guildpact", "GPT");
  }
}

module.exports = GhorClanSavage;
