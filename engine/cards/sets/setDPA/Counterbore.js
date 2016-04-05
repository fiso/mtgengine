"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Counterbore extends UnimplementedCard {
  constructor(game) {
    super(game, "Counterbore", "Duels of the Planeswalkers", "DPA");
  }
}

module.exports = Counterbore;
