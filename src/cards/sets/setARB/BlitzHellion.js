"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BlitzHellion extends UnimplementedCard {
  constructor (game) {
    super(game, "Blitz Hellion", "Alara Reborn", "ARB");
  }
}

module.exports = BlitzHellion;
