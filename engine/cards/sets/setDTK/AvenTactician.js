"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AvenTactician extends UnimplementedCard {
  constructor(game) {
    super(game, "Aven Tactician", "Dragons of Tarkir", "DTK");
  }
}

module.exports = AvenTactician;
