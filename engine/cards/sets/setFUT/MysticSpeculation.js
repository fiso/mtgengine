"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MysticSpeculation extends UnimplementedCard {
  constructor(game) {
    super(game, "Mystic Speculation", "Future Sight", "FUT");
  }
}

module.exports = MysticSpeculation;
