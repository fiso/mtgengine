"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BitterOrdeal extends UnimplementedCard {
  constructor(game) {
    super(game, "Bitter Ordeal", "Future Sight", "FUT");
  }
}

module.exports = BitterOrdeal;
