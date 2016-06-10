"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Melancholy extends UnimplementedCard {
  constructor (game) {
    super(game, "Melancholy", "Planar Chaos", "PLC");
  }
}

module.exports = Melancholy;
