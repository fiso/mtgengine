"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SwiftWarkite extends UnimplementedCard {
  constructor(game) {
    super(game, "Swift Warkite", "Dragons of Tarkir", "DTK");
  }
}

module.exports = SwiftWarkite;
