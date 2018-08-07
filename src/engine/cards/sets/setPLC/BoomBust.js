"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BoomBust extends UnimplementedCard {
  constructor (game) {
    super(game, "Boom // Bust", "Planar Chaos", "PLC");
  }
}

module.exports = BoomBust;
