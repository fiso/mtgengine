"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GhorClanSavageBase = require("../setDDL/GhorClanSavage.js");

class GhorClanSavage extends GhorClanSavageBase {
  constructor(game) {
    super(game, "Ghor-Clan Savage", "Guildpact", "GPT");
  }
}

module.exports = GhorClanSavage;
