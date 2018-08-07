"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TheExplorer extends UnimplementedCard {
  constructor (game) {
    super(game, "The Explorer", "Born of the Gods Hero's Path", "THP2");
  }
}

module.exports = TheExplorer;
