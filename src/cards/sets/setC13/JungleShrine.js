"use strict";
const Constants = require ("../../../Constants");
const JungleShrineBase = require("../setE02/JungleShrine");

class JungleShrine extends JungleShrineBase {
  constructor (game) {
    super(game, "Jungle Shrine", "Commander 2013", "C13");
  }
}

module.exports = JungleShrine;
