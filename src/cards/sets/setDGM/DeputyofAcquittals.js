"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DeputyofAcquittals extends UnimplementedCard {
  constructor (game) {
    super(game, "Deputy of Acquittals", "Dragon's Maze", "DGM");
  }
}

module.exports = DeputyofAcquittals;
