"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PhyrexianBloodstock extends UnimplementedCard {
  constructor(game) {
    super(game, "Phyrexian Bloodstock", "Planeshift", "PLS");
  }
}

module.exports = PhyrexianBloodstock;
