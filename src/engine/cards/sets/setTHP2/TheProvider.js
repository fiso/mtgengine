"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TheProvider extends UnimplementedCard {
  constructor (game) {
    super(game, "The Provider", "Born of the Gods Hero's Path", "THP2");
  }
}

module.exports = TheProvider;
