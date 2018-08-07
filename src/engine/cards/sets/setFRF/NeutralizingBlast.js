"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NeutralizingBlast extends UnimplementedCard {
  constructor (game) {
    super(game, "Neutralizing Blast", "Fate Reforged", "FRF");
  }
}

module.exports = NeutralizingBlast;
