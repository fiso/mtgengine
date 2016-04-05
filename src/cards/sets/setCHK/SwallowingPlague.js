"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SwallowingPlague extends UnimplementedCard {
  constructor(game) {
    super(game, "Swallowing Plague", "Champions of Kamigawa", "CHK");
  }
}

module.exports = SwallowingPlague;
