"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AuguryOwl extends UnimplementedCard {
  constructor (game) {
    super(game, "Augury Owl", "Planechase Anthology", "PCA");
  }
}

module.exports = AuguryOwl;
