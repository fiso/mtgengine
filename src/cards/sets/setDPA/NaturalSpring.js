"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NaturalSpring extends UnimplementedCard {
  constructor (game) {
    super(game, "Natural Spring", "Duels of the Planeswalkers", "DPA");
  }
}

module.exports = NaturalSpring;
