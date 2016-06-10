"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MiseryCharm extends UnimplementedCard {
  constructor (game) {
    super(game, "Misery Charm", "Onslaught", "ONS");
  }
}

module.exports = MiseryCharm;
