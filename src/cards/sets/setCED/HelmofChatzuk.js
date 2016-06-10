"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HelmofChatzuk extends UnimplementedCard {
  constructor (game) {
    super(game, "Helm of Chatzuk", "Collector's Edition", "CED");
  }
}

module.exports = HelmofChatzuk;
