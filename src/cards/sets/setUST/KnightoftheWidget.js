"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KnightoftheWidget extends UnimplementedCard {
  constructor (game) {
    super(game, "Knight of the Widget", "Unstable", "UST");
  }
}

module.exports = KnightoftheWidget;
