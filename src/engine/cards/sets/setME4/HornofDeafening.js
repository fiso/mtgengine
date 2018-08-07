"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HornofDeafening extends UnimplementedCard {
  constructor (game) {
    super(game, "Horn of Deafening", "Masters Edition IV", "ME4");
  }
}

module.exports = HornofDeafening;
