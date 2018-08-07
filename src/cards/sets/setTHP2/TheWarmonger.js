"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TheWarmonger extends UnimplementedCard {
  constructor (game) {
    super(game, "The Warmonger", "Born of the Gods Hero's Path", "THP2");
  }
}

module.exports = TheWarmonger;
