"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LavaBlister extends UnimplementedCard {
  constructor (game) {
    super(game, "Lava Blister", "Odyssey", "ODY");
  }
}

module.exports = LavaBlister;
