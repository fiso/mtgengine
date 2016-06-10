"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class JacesErasure extends UnimplementedCard {
  constructor (game) {
    super(game, "Jace's Erasure", "Magic 2011", "M11");
  }
}

module.exports = JacesErasure;
