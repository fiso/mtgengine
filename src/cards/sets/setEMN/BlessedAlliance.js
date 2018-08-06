"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BlessedAlliance extends UnimplementedCard {
  constructor (game) {
    super(game, "Blessed Alliance", "Eldritch Moon", "EMN");
  }
}

module.exports = BlessedAlliance;
