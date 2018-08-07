"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MarchesasDecree extends UnimplementedCard {
  constructor (game) {
    super(game, "Marchesa's Decree", "You Make the Cube", "PZ2");
  }
}

module.exports = MarchesasDecree;
