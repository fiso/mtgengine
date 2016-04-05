"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class StromkirkPatrol extends UnimplementedCard {
  constructor(game) {
    super(game, "Stromkirk Patrol", "Innistrad", "ISD");
  }
}

module.exports = StromkirkPatrol;
