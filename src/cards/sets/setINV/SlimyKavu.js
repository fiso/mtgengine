"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SlimyKavu extends UnimplementedCard {
  constructor(game) {
    super(game, "Slimy Kavu", "Invasion", "INV");
  }
}

module.exports = SlimyKavu;
