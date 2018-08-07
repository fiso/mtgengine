"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TheVanquisher extends UnimplementedCard {
  constructor (game) {
    super(game, "The Vanquisher", "Born of the Gods Hero's Path", "THP2");
  }
}

module.exports = TheVanquisher;
