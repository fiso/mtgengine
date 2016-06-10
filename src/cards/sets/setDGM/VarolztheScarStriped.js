"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VarolztheScarStriped extends UnimplementedCard {
  constructor (game) {
    super(game, "Varolz, the Scar-Striped", "Dragon's Maze", "DGM");
  }
}

module.exports = VarolztheScarStriped;
