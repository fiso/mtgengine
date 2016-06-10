"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FieryBombardment extends UnimplementedCard {
  constructor (game) {
    super(game, "Fiery Bombardment", "Eventide", "EVE");
  }
}

module.exports = FieryBombardment;
