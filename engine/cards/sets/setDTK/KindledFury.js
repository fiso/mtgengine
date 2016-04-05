"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KindledFury extends UnimplementedCard {
  constructor(game) {
    super(game, "Kindled Fury", "Dragons of Tarkir", "DTK");
  }
}

module.exports = KindledFury;
