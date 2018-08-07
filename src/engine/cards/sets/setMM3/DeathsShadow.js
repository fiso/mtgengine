"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DeathsShadow extends UnimplementedCard {
  constructor (game) {
    super(game, "Death's Shadow", "Modern Masters 2017", "MM3");
  }
}

module.exports = DeathsShadow;
