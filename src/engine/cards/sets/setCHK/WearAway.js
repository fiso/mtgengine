"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WearAway extends UnimplementedCard {
  constructor (game) {
    super(game, "Wear Away", "Champions of Kamigawa", "CHK");
  }
}

module.exports = WearAway;
