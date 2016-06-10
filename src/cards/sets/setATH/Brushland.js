"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Brushland extends UnimplementedCard {
  constructor (game) {
    super(game, "Brushland", "Anthologies", "ATH");
  }
}

module.exports = Brushland;
