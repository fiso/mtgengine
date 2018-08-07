"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Boomerang extends UnimplementedCard {
  constructor (game) {
    super(game, "Boomerang", "Duels of the Planeswalkers", "DPA");
  }
}

module.exports = Boomerang;
