"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Cyclone extends UnimplementedCard {
  constructor (game) {
    super(game, "Cyclone", "Masters Edition IV", "ME4");
  }
}

module.exports = Cyclone;
