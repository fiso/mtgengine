"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AladdinsRing extends UnimplementedCard {
  constructor (game) {
    super(game, "Aladdin's Ring", "Ninth Edition", "9ED");
  }
}

module.exports = AladdinsRing;
