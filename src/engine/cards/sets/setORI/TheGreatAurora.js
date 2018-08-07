"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TheGreatAurora extends UnimplementedCard {
  constructor (game) {
    super(game, "The Great Aurora", "Magic Origins", "ORI");
  }
}

module.exports = TheGreatAurora;
