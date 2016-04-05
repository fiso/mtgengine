"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Homarid extends UnimplementedCard {
  constructor(game) {
    super(game, "Homarid", "Fallen Empires", "FEM");
  }
}

module.exports = Homarid;
