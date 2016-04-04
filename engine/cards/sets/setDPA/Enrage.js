"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Enrage extends UnimplementedCard {
  constructor(game) {
    super(game, "Enrage", "Duels of the Planeswalkers", "DPA");
  }
}

module.exports = Enrage;
