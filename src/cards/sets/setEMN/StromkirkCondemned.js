"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class StromkirkCondemned extends UnimplementedCard {
  constructor (game) {
    super(game, "Stromkirk Condemned", "Eldritch Moon", "EMN");
  }
}

module.exports = StromkirkCondemned;
