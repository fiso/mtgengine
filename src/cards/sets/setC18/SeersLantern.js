"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SeersLantern extends UnimplementedCard {
  constructor (game) {
    super(game, "Seer's Lantern", "Commander 2018", "C18");
  }
}

module.exports = SeersLantern;
