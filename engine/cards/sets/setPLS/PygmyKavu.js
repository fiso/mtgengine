"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PygmyKavu extends UnimplementedCard {
  constructor(game) {
    super(game, "Pygmy Kavu", "Planeshift", "PLS");
  }
}

module.exports = PygmyKavu;
