"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ThelonsChant extends UnimplementedCard {
  constructor (game) {
    super(game, "Thelon's Chant", "Fallen Empires", "FEM");
  }
}

module.exports = ThelonsChant;
