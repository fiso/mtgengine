"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WormfangCrab extends UnimplementedCard {
  constructor(game) {
    super(game, "Wormfang Crab", "Judgment", "JUD");
  }
}

module.exports = WormfangCrab;
