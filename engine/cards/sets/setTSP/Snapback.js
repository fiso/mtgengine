"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Snapback extends UnimplementedCard {
  constructor(game) {
    super(game, "Snapback", "Time Spiral", "TSP");
  }
}

module.exports = Snapback;
