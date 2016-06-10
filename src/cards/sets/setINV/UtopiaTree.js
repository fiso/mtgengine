"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class UtopiaTree extends UnimplementedCard {
  constructor (game) {
    super(game, "Utopia Tree", "Invasion", "INV");
  }
}

module.exports = UtopiaTree;
