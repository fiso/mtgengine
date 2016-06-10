"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FurnaceofRath extends UnimplementedCard {
  constructor (game) {
    super(game, "Furnace of Rath", "Duels of the Planeswalkers", "DPA");
  }
}

module.exports = FurnaceofRath;
