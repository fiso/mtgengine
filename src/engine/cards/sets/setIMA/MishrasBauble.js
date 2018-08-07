"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MishrasBauble extends UnimplementedCard {
  constructor (game) {
    super(game, "Mishra's Bauble", "Iconic Masters", "IMA");
  }
}

module.exports = MishrasBauble;
