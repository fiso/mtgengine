"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TheDestined extends UnimplementedCard {
  constructor (game) {
    super(game, "The Destined", "Journey into Nyx Hero's Path", "THP3");
  }
}

module.exports = TheDestined;
