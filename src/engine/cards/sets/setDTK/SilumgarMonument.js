"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SilumgarMonument extends UnimplementedCard {
  constructor (game) {
    super(game, "Silumgar Monument", "Dragons of Tarkir", "DTK");
  }
}

module.exports = SilumgarMonument;
