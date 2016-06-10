"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Vanishing extends UnimplementedCard {
  constructor (game) {
    super(game, "Vanishing", "Visions", "VIS");
  }
}

module.exports = Vanishing;
