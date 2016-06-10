"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VigilantSentry extends UnimplementedCard {
  constructor (game) {
    super(game, "Vigilant Sentry", "Judgment", "JUD");
  }
}

module.exports = VigilantSentry;
