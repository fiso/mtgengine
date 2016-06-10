"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PublicExecution extends UnimplementedCard {
  constructor (game) {
    super(game, "Public Execution", "Magic 2013", "M13");
  }
}

module.exports = PublicExecution;
