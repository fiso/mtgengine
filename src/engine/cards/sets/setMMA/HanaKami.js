"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HanaKami extends UnimplementedCard {
  constructor (game) {
    super(game, "Hana Kami", "Modern Masters", "MMA");
  }
}

module.exports = HanaKami;
