"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VoidstoneGargoyle extends UnimplementedCard {
  constructor (game) {
    super(game, "Voidstone Gargoyle", "Planar Chaos", "PLC");
  }
}

module.exports = VoidstoneGargoyle;
