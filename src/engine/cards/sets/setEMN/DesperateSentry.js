"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DesperateSentry extends UnimplementedCard {
  constructor (game) {
    super(game, "Desperate Sentry", "Eldritch Moon", "EMN");
  }
}

module.exports = DesperateSentry;
