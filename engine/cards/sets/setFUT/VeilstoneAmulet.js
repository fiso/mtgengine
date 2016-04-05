"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VeilstoneAmulet extends UnimplementedCard {
  constructor(game) {
    super(game, "Veilstone Amulet", "Future Sight", "FUT");
  }
}

module.exports = VeilstoneAmulet;
