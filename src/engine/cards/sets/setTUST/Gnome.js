"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Gnome extends UnimplementedCard {
  constructor (game) {
    super(game, "Gnome", "Unstable Tokens", "TUST");
  }
}

module.exports = Gnome;
