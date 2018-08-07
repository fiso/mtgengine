"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RustwingFalcon extends UnimplementedCard {
  constructor (game) {
    super(game, "Rustwing Falcon", "Core Set 2019", "M19");
  }
}

module.exports = RustwingFalcon;
