"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RoninCavekeeper extends UnimplementedCard {
  constructor(game) {
    super(game, "Ronin Cavekeeper", "Saviors of Kamigawa", "SOK");
  }
}

module.exports = RoninCavekeeper;
