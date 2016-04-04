"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KherKeep extends UnimplementedCard {
  constructor(game) {
    super(game, "Kher Keep", "Commander 2013 Edition", "C13");
  }
}

module.exports = KherKeep;
