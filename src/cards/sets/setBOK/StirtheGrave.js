"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class StirtheGrave extends UnimplementedCard {
  constructor(game) {
    super(game, "Stir the Grave", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = StirtheGrave;
