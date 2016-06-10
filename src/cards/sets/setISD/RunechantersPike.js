"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RunechantersPike extends UnimplementedCard {
  constructor (game) {
    super(game, "Runechanter's Pike", "Innistrad", "ISD");
  }
}

module.exports = RunechantersPike;
