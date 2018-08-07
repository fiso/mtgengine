"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GrafdiggersCage extends UnimplementedCard {
  constructor (game) {
    super(game, "Grafdigger's Cage", "Modern Masters 2017", "MM3");
  }
}

module.exports = GrafdiggersCage;
