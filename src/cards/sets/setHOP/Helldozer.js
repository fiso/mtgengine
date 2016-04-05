"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Helldozer extends UnimplementedCard {
  constructor(game) {
    super(game, "Helldozer", "Planechase", "HOP");
  }
}

module.exports = Helldozer;
