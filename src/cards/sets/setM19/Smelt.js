"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Smelt extends UnimplementedCard {
  constructor (game) {
    super(game, "Smelt", "Core Set 2019", "M19");
  }
}

module.exports = Smelt;
