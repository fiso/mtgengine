"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LeoninBola extends UnimplementedCard {
  constructor (game) {
    super(game, "Leonin Bola", "Darksteel", "DST");
  }
}

module.exports = LeoninBola;
