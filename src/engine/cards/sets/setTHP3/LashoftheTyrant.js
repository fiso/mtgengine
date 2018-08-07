"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LashoftheTyrant extends UnimplementedCard {
  constructor (game) {
    super(game, "Lash of the Tyrant", "Journey into Nyx Hero's Path", "THP3");
  }
}

module.exports = LashoftheTyrant;
