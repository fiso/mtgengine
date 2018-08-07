"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TitanicPelagosaur extends UnimplementedCard {
  constructor (game) {
    super(game, "Titanic Pelagosaur", "MTG Arena New Player Experience", "MTGA");
  }
}

module.exports = TitanicPelagosaur;
