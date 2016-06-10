"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GraphicViolence extends UnimplementedCard {
  constructor (game) {
    super(game, "Graphic Violence", "Unhinged", "UNH");
  }
}

module.exports = GraphicViolence;
