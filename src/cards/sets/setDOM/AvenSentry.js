"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AvenSentry extends UnimplementedCard {
  constructor (game) {
    super(game, "Aven Sentry", "Dominaria", "DOM");
  }
}

module.exports = AvenSentry;
