"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MoongloveWinnower extends UnimplementedCard {
  constructor (game) {
    super(game, "Moonglove Winnower", "Duels of the Planeswalkers", "DPA");
  }
}

module.exports = MoongloveWinnower;
