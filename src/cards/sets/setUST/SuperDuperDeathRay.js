"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SuperDuperDeathRay extends UnimplementedCard {
  constructor (game) {
    super(game, "Super-Duper Death Ray", "Unstable", "UST");
  }
}

module.exports = SuperDuperDeathRay;
