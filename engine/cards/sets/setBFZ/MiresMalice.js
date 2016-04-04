"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MiresMalice extends UnimplementedCard {
  constructor(game) {
    super(game, "Mire's Malice", "Battle for Zendikar", "BFZ");
  }
}

module.exports = MiresMalice;
