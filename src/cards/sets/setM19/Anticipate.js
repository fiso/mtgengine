"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Anticipate extends UnimplementedCard {
  constructor (game) {
    super(game, "Anticipate", "Core Set 2019", "M19");
  }
}

module.exports = Anticipate;
