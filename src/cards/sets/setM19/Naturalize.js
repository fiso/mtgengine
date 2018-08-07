"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Naturalize extends UnimplementedCard {
  constructor (game) {
    super(game, "Naturalize", "Core Set 2019", "M19");
  }
}

module.exports = Naturalize;
