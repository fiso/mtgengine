"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WeaveFate extends UnimplementedCard {
  constructor (game) {
    super(game, "Weave Fate", "Khans of Tarkir", "KTK");
  }
}

module.exports = WeaveFate;
