"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Gargoyle extends UnimplementedCard {
  constructor (game) {
    super(game, "Gargoyle", "Commander Anthology Tokens", "TCMA");
  }
}

module.exports = Gargoyle;
