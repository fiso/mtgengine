"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PhyrexianUnlife extends UnimplementedCard {
  constructor(game) {
    super(game, "Phyrexian Unlife", "New Phyrexia", "NPH");
  }
}

module.exports = PhyrexianUnlife;
