"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FacelessDevourer extends UnimplementedCard {
  constructor (game) {
    super(game, "Faceless Devourer", "Time Spiral", "TSP");
  }
}

module.exports = FacelessDevourer;
