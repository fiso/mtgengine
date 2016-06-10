"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MatsuTribeSniper extends UnimplementedCard {
  constructor (game) {
    super(game, "Matsu-Tribe Sniper", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = MatsuTribeSniper;
