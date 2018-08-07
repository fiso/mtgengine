"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SavageSilhouette extends UnimplementedCard {
  constructor (game) {
    super(game, "Savage Silhouette", "Zendikar", "ZEN");
  }
}

module.exports = SavageSilhouette;
