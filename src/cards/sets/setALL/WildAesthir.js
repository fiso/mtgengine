"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WildAesthir extends UnimplementedCard {
  constructor (game) {
    super(game, "Wild Aesthir", "Alliances", "ALL");
  }
}

module.exports = WildAesthir;
