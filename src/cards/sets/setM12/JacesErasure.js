"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class JacesErasure extends UnimplementedCard {
  constructor (game) {
    super(game, "Jace's Erasure", "Magic 2012", "M12");
  }
}

module.exports = JacesErasure;
