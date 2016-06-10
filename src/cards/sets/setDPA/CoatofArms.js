"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CoatofArms extends UnimplementedCard {
  constructor (game) {
    super(game, "Coat of Arms", "Duels of the Planeswalkers", "DPA");
  }
}

module.exports = CoatofArms;
