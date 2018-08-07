"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ElvenRiders extends UnimplementedCard {
  constructor (game) {
    super(game, "Elven Riders", "Duels of the Planeswalkers", "DPA");
  }
}

module.exports = ElvenRiders;
