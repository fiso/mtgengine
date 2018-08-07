"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RapidPrototyper extends UnimplementedCard {
  constructor (game) {
    super(game, "Rapid Prototyper", "Unstable", "UST");
  }
}

module.exports = RapidPrototyper;
