"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class KrarkClanShaman extends Card {
  constructor(game) {
    super(game, "Krark-Clan Shaman", "Mirrodin", "MRD");
  }
}

module.exports = KrarkClanShaman;
