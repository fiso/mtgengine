"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Heroism extends UnimplementedCard {
  constructor(game) {
    super(game, "Heroism", "Fallen Empires", "FEM");
  }
}

module.exports = Heroism;
