"use strict";
const Constants = require ("../../../Constants");
const JungleShrineBase = require("../setC13/JungleShrine");

class JungleShrine extends JungleShrineBase {
  constructor(game) {
    super(game, "Jungle Shrine", "Shards of Alara", "ALA");
  }
}

module.exports = JungleShrine;
