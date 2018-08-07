"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DualShot extends UnimplementedCard {
  constructor (game) {
    super(game, "Dual Shot", "Ixalan", "XLN");
  }
}

module.exports = DualShot;
