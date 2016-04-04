"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EncaseinIce extends UnimplementedCard {
  constructor(game) {
    super(game, "Encase in Ice", "Dragons of Tarkir", "DTK");
  }
}

module.exports = EncaseinIce;
