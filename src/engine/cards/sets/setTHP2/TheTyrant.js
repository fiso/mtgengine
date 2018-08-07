"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TheTyrant extends UnimplementedCard {
  constructor (game) {
    super(game, "The Tyrant", "Born of the Gods Hero's Path", "THP2");
  }
}

module.exports = TheTyrant;
