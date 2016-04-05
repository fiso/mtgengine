"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Peacekeeper extends UnimplementedCard {
  constructor(game) {
    super(game, "Peacekeeper", "Weatherlight", "WTH");
  }
}

module.exports = Peacekeeper;
