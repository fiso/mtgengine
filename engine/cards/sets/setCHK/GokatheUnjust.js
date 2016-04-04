"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GokatheUnjust extends UnimplementedCard {
  constructor(game) {
    super(game, "Goka the Unjust", "Champions of Kamigawa", "CHK");
  }
}

module.exports = GokatheUnjust;
