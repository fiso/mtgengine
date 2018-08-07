"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Stensia extends UnimplementedCard {
  constructor (game) {
    super(game, "Stensia", "Planechase Anthology", "PCA");
  }
}

module.exports = Stensia;
