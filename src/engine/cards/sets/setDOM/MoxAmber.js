"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MoxAmber extends UnimplementedCard {
  constructor (game) {
    super(game, "Mox Amber", "Dominaria", "DOM");
  }
}

module.exports = MoxAmber;
