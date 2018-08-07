"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CavalryPegasus extends UnimplementedCard {
  constructor (game) {
    super(game, "Cavalry Pegasus", "Theros", "THS");
  }
}

module.exports = CavalryPegasus;
