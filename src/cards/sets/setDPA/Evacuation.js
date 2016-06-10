"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Evacuation extends UnimplementedCard {
  constructor (game) {
    super(game, "Evacuation", "Duels of the Planeswalkers", "DPA");
  }
}

module.exports = Evacuation;
