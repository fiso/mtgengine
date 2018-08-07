"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ObzedatsAid extends UnimplementedCard {
  constructor (game) {
    super(game, "Obzedat's Aid", "Dragon's Maze", "DGM");
  }
}

module.exports = ObzedatsAid;
