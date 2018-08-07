"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DeeprootChampion extends UnimplementedCard {
  constructor (game) {
    super(game, "Deeproot Champion", "Ixalan", "XLN");
  }
}

module.exports = DeeprootChampion;
