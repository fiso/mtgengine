"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Fervor extends UnimplementedCard {
  constructor (game) {
    super(game, "Fervor", "Magic 2013", "M13");
  }
}

module.exports = Fervor;
