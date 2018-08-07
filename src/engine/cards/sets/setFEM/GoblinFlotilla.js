"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GoblinFlotilla extends UnimplementedCard {
  constructor (game) {
    super(game, "Goblin Flotilla", "Fallen Empires", "FEM");
  }
}

module.exports = GoblinFlotilla;
