"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WickerWarcrawler extends UnimplementedCard {
  constructor (game) {
    super(game, "Wicker Warcrawler", "Shadowmoor", "SHM");
  }
}

module.exports = WickerWarcrawler;
