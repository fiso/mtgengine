"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ThranDynamo extends UnimplementedCard {
  constructor (game) {
    super(game, "Thran Dynamo", "Archenemy", "ARC");
  }
}

module.exports = ThranDynamo;
