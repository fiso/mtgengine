"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TheGeneral extends UnimplementedCard {
  constructor (game) {
    super(game, "The General", "Born of the Gods Hero's Path", "THP2");
  }
}

module.exports = TheGeneral;
