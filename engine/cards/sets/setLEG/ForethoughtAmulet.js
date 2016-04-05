"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ForethoughtAmulet extends UnimplementedCard {
  constructor(game) {
    super(game, "Forethought Amulet", "Legends", "LEG");
  }
}

module.exports = ForethoughtAmulet;
