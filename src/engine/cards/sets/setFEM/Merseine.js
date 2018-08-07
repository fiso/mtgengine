"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Merseine extends UnimplementedCard {
  constructor (game) {
    super(game, "Merseine", "Fallen Empires", "FEM");
  }
}

module.exports = Merseine;
