"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SplittingHeadache extends UnimplementedCard {
  constructor (game) {
    super(game, "Splitting Headache", "Shadowmoor", "SHM");
  }
}

module.exports = SplittingHeadache;
