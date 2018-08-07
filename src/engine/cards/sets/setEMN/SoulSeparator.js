"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SoulSeparator extends UnimplementedCard {
  constructor (game) {
    super(game, "Soul Separator", "Eldritch Moon", "EMN");
  }
}

module.exports = SoulSeparator;
