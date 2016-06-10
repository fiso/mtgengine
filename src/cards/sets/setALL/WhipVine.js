"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WhipVine extends UnimplementedCard {
  constructor (game) {
    super(game, "Whip Vine", "Alliances", "ALL");
  }
}

module.exports = WhipVine;
