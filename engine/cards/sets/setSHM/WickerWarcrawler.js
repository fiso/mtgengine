"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WickerWarcrawler extends Card {
  constructor(game) {
    super(game, "Wicker Warcrawler", "Shadowmoor", "SHM");
  }
}

module.exports = WickerWarcrawler;
