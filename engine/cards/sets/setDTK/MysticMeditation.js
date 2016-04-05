"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MysticMeditation extends UnimplementedCard {
  constructor(game) {
    super(game, "Mystic Meditation", "Dragons of Tarkir", "DTK");
  }
}

module.exports = MysticMeditation;
