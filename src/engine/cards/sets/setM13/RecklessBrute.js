"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RecklessBrute extends UnimplementedCard {
  constructor (game) {
    super(game, "Reckless Brute", "Magic 2013", "M13");
  }
}

module.exports = RecklessBrute;
