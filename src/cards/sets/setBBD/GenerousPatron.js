"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GenerousPatron extends UnimplementedCard {
  constructor (game) {
    super(game, "Generous Patron", "Battlebond", "BBD");
  }
}

module.exports = GenerousPatron;
