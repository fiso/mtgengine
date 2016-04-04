"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class StromkirkPatrol extends Card {
  constructor(game) {
    super(game, "Stromkirk Patrol", "Innistrad", "ISD");
  }
}

module.exports = StromkirkPatrol;
