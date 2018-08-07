"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MysticMonastery extends UnimplementedCard {
  constructor (game) {
    super(game, "Mystic Monastery", "Commander 2017", "C17");
  }
}

module.exports = MysticMonastery;
