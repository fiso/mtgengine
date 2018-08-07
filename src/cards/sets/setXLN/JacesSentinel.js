"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class JacesSentinel extends UnimplementedCard {
  constructor (game) {
    super(game, "Jace's Sentinel", "Ixalan", "XLN");
  }
}

module.exports = JacesSentinel;
