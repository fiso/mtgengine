"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Bargain extends UnimplementedCard {
  constructor (game) {
    super(game, "Bargain", "Starter 1999", "S99");
  }
}

module.exports = Bargain;
