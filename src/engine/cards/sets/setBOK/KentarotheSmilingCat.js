"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KentarotheSmilingCat extends UnimplementedCard {
  constructor (game) {
    super(game, "Kentaro, the Smiling Cat", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = KentarotheSmilingCat;
