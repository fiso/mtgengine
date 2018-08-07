"use strict";
const Constants = require ("../../../Constants");
const JungleShrineBase = require("../setE02/JungleShrine");

class JungleShrine extends JungleShrineBase {
  constructor (game) {
    super(game, "Jungle Shrine", "Legendary Cube", "PZ1");
  }
}

module.exports = JungleShrine;
