"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MurmuringBosk extends UnimplementedCard {
  constructor (game) {
    super(game, "Murmuring Bosk", "Commander Anthology Volume II", "CM2");
  }
}

module.exports = MurmuringBosk;
