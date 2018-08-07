"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FeverCharm extends UnimplementedCard {
  constructor (game) {
    super(game, "Fever Charm", "Onslaught", "ONS");
  }
}

module.exports = FeverCharm;
