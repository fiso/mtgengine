"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Fleshwrither extends UnimplementedCard {
  constructor (game) {
    super(game, "Fleshwrither", "Future Sight", "FUT");
  }
}

module.exports = Fleshwrither;
