"use strict";
const Constants = require ("../../../Constants");
const JungleShrineBase = require("../setE02/JungleShrine");

class JungleShrine extends JungleShrineBase {
  constructor (game) {
    super(game, "Jungle Shrine", "Modern Masters 2017", "MM3");
  }
}

module.exports = JungleShrine;
