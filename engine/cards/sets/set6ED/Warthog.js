"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Warthog extends UnimplementedCard {
  constructor(game) {
    super(game, "Warthog", "Classic Sixth Edition", "6ED");
  }
}

module.exports = Warthog;
