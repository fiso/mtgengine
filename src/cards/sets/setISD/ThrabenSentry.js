"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ThrabenSentry extends UnimplementedCard {
  constructor (game) {
    super(game, "Thraben Sentry", "Innistrad", "ISD");
  }
}

module.exports = ThrabenSentry;
