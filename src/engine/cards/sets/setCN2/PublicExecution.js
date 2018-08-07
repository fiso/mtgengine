"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PublicExecution extends UnimplementedCard {
  constructor (game) {
    super(game, "Public Execution", "Conspiracy: Take the Crown", "CN2");
  }
}

module.exports = PublicExecution;
