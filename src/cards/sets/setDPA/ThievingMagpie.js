"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ThievingMagpie extends UnimplementedCard {
  constructor(game) {
    super(game, "Thieving Magpie", "Duels of the Planeswalkers", "DPA");
  }
}

module.exports = ThievingMagpie;
