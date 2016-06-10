"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Drowned extends UnimplementedCard {
  constructor (game) {
    super(game, "Drowned", "Masters Edition IV", "ME4");
  }
}

module.exports = Drowned;
