"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MysticRemora extends UnimplementedCard {
  constructor (game) {
    super(game, "Mystic Remora", "Masters Edition", "MED");
  }
}

module.exports = MysticRemora;
