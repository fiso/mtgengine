"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LayWaste extends UnimplementedCard {
  constructor (game) {
    super(game, "Lay Waste", "Onslaught", "ONS");
  }
}

module.exports = LayWaste;
