"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class UntamedKavu extends UnimplementedCard {
  constructor (game) {
    super(game, "Untamed Kavu", "Dominaria", "DOM");
  }
}

module.exports = UntamedKavu;
