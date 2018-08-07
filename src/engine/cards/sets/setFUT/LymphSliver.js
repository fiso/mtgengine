"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LymphSliver extends UnimplementedCard {
  constructor (game) {
    super(game, "Lymph Sliver", "Future Sight", "FUT");
  }
}

module.exports = LymphSliver;
