"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Whipkeeper extends UnimplementedCard {
  constructor(game) {
    super(game, "Whipkeeper", "Odyssey", "ODY");
  }
}

module.exports = Whipkeeper;
