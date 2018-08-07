"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ChandraPyrogenius extends UnimplementedCard {
  constructor (game) {
    super(game, "Chandra, Pyrogenius", "Kaladesh", "KLD");
  }
}

module.exports = ChandraPyrogenius;
