"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TrickeryCharm extends UnimplementedCard {
  constructor (game) {
    super(game, "Trickery Charm", "Onslaught", "ONS");
  }
}

module.exports = TrickeryCharm;
