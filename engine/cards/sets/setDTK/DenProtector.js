"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DenProtector extends UnimplementedCard {
  constructor(game) {
    super(game, "Den Protector", "Dragons of Tarkir", "DTK");
  }
}

module.exports = DenProtector;
