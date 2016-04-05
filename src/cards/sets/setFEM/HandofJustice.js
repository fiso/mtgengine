"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HandofJustice extends UnimplementedCard {
  constructor(game) {
    super(game, "Hand of Justice", "Fallen Empires", "FEM");
  }
}

module.exports = HandofJustice;
