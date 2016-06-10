"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class JelennSphinx extends UnimplementedCard {
  constructor (game) {
    super(game, "Jelenn Sphinx", "Dragon's Maze", "DGM");
  }
}

module.exports = JelennSphinx;
