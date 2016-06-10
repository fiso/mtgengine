"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PaintersServant extends UnimplementedCard {
  constructor (game) {
    super(game, "Painter's Servant", "Shadowmoor", "SHM");
  }
}

module.exports = PaintersServant;
