"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DarkWithering extends UnimplementedCard {
  constructor (game) {
    super(game, "Dark Withering", "Time Spiral", "TSP");
  }
}

module.exports = DarkWithering;
