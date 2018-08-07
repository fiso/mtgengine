"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class JaliraMasterPolymorphist extends UnimplementedCard {
  constructor (game) {
    super(game, "Jalira, Master Polymorphist", "Masters 25", "A25");
  }
}

module.exports = JaliraMasterPolymorphist;
