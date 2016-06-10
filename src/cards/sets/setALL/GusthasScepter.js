"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GusthasScepter extends UnimplementedCard {
  constructor (game) {
    super(game, "Gustha's Scepter", "Alliances", "ALL");
  }
}

module.exports = GusthasScepter;
