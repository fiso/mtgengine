"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EnlightenedAscetic extends UnimplementedCard {
  constructor(game) {
    super(game, "Enlightened Ascetic", "Magic Origins", "ORI");
  }
}

module.exports = EnlightenedAscetic;
