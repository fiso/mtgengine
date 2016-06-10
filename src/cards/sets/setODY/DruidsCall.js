"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DruidsCall extends UnimplementedCard {
  constructor (game) {
    super(game, "Druid's Call", "Odyssey", "ODY");
  }
}

module.exports = DruidsCall;
