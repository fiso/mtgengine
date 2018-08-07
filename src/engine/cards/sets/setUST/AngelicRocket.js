"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AngelicRocket extends UnimplementedCard {
  constructor (game) {
    super(game, "Angelic Rocket", "Unstable", "UST");
  }
}

module.exports = AngelicRocket;
