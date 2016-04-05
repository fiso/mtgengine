"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SpringingTiger extends UnimplementedCard {
  constructor(game) {
    super(game, "Springing Tiger", "Odyssey", "ODY");
  }
}

module.exports = SpringingTiger;
