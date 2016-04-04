"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DustofMoments extends UnimplementedCard {
  constructor(game) {
    super(game, "Dust of Moments", "Future Sight", "FUT");
  }
}

module.exports = DustofMoments;
