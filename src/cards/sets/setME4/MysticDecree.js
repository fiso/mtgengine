"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MysticDecree extends UnimplementedCard {
  constructor (game) {
    super(game, "Mystic Decree", "Masters Edition IV", "ME4");
  }
}

module.exports = MysticDecree;
