"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class OnduGiant extends UnimplementedCard {
  constructor (game) {
    super(game, "Ondu Giant", "Planechase Anthology", "PCA");
  }
}

module.exports = OnduGiant;
