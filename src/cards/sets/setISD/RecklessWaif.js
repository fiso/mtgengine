"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RecklessWaif extends UnimplementedCard {
  constructor(game) {
    super(game, "Reckless Waif", "Innistrad", "ISD");
  }
}

module.exports = RecklessWaif;
