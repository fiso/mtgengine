"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class StromkirkNoble extends UnimplementedCard {
  constructor (game) {
    super(game, "Stromkirk Noble", "Innistrad", "ISD");
  }
}

module.exports = StromkirkNoble;
