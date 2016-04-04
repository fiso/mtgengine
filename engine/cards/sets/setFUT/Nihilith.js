"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Nihilith extends UnimplementedCard {
  constructor(game) {
    super(game, "Nihilith", "Future Sight", "FUT");
  }
}

module.exports = Nihilith;
