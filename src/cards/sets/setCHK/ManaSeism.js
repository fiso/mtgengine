"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ManaSeism extends UnimplementedCard {
  constructor (game) {
    super(game, "Mana Seism", "Champions of Kamigawa", "CHK");
  }
}

module.exports = ManaSeism;
