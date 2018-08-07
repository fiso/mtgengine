"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HavocDemon extends UnimplementedCard {
  constructor (game) {
    super(game, "Havoc Demon", "Eternal Masters", "EMA");
  }
}

module.exports = HavocDemon;
