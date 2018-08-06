"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PropheticRavings extends UnimplementedCard {
  constructor (game) {
    super(game, "Prophetic Ravings", "Eldritch Moon", "EMN");
  }
}

module.exports = PropheticRavings;
