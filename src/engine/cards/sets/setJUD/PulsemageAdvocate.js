"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PulsemageAdvocate extends UnimplementedCard {
  constructor (game) {
    super(game, "Pulsemage Advocate", "Judgment", "JUD");
  }
}

module.exports = PulsemageAdvocate;
