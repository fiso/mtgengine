"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WildAesthir extends UnimplementedCard {
  constructor (game) {
    super(game, "Wild Aesthir", "Masters Edition IV", "ME4");
  }
}

module.exports = WildAesthir;
