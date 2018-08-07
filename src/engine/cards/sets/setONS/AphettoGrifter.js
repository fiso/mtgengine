"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AphettoGrifter extends UnimplementedCard {
  constructor (game) {
    super(game, "Aphetto Grifter", "Onslaught", "ONS");
  }
}

module.exports = AphettoGrifter;
