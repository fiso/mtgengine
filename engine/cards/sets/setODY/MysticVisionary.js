"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MysticVisionary extends UnimplementedCard {
  constructor(game) {
    super(game, "Mystic Visionary", "Odyssey", "ODY");
  }
}

module.exports = MysticVisionary;
