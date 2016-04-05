"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TalarasBattalion extends UnimplementedCard {
  constructor(game) {
    super(game, "Talara's Battalion", "Duels of the Planeswalkers", "DPA");
  }
}

module.exports = TalarasBattalion;
