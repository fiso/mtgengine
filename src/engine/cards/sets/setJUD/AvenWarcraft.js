"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AvenWarcraft extends UnimplementedCard {
  constructor (game) {
    super(game, "Aven Warcraft", "Judgment", "JUD");
  }
}

module.exports = AvenWarcraft;
