"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Megrim extends UnimplementedCard {
  constructor(game) {
    super(game, "Megrim", "Duels of the Planeswalkers", "DPA");
  }
}

module.exports = Megrim;
