"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BoonofEmrakul extends UnimplementedCard {
  constructor (game) {
    super(game, "Boon of Emrakul", "Eldritch Moon", "EMN");
  }
}

module.exports = BoonofEmrakul;
