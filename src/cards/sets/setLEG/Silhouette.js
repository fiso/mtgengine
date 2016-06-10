"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Silhouette extends UnimplementedCard {
  constructor (game) {
    super(game, "Silhouette", "Legends", "LEG");
  }
}

module.exports = Silhouette;
