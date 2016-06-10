"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SafeHaven extends UnimplementedCard {
  constructor (game) {
    super(game, "Safe Haven", "Chronicles", "CHR");
  }
}

module.exports = SafeHaven;
