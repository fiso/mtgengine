"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ArmoredGriffin extends UnimplementedCard {
  constructor (game) {
    super(game, "Armored Griffin", "Planechase Anthology", "PCA");
  }
}

module.exports = ArmoredGriffin;
