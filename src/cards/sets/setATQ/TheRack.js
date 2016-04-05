"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TheRack extends UnimplementedCard {
  constructor(game) {
    super(game, "The Rack", "Antiquities", "ATQ");
  }
}

module.exports = TheRack;
