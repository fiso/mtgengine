"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WillingTestSubject extends UnimplementedCard {
  constructor (game) {
    super(game, "Willing Test Subject", "Unstable", "UST");
  }
}

module.exports = WillingTestSubject;
