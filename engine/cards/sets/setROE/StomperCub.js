"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class StomperCub extends UnimplementedCard {
  constructor(game) {
    super(game, "Stomper Cub", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = StomperCub;
