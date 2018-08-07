"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Despise extends UnimplementedCard {
  constructor (game) {
    super(game, "Despise", "Khans of Tarkir", "KTK");
  }
}

module.exports = Despise;
