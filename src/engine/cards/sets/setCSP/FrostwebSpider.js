"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FrostwebSpider extends UnimplementedCard {
  constructor (game) {
    super(game, "Frostweb Spider", "Coldsnap", "CSP");
  }
}

module.exports = FrostwebSpider;
