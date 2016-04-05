"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DeathWish extends UnimplementedCard {
  constructor(game) {
    super(game, "Death Wish", "Judgment", "JUD");
  }
}

module.exports = DeathWish;
