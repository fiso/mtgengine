"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ShroudedLore extends UnimplementedCard {
  constructor(game) {
    super(game, "Shrouded Lore", "Planar Chaos", "PLC");
  }
}

module.exports = ShroudedLore;
