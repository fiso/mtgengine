"use strict";
const Constants = require ("../../../Constants");
const StromkirkPatrolBase = require("../setCN2/StromkirkPatrol");

class StromkirkPatrol extends StromkirkPatrolBase {
  constructor (game) {
    super(game, "Stromkirk Patrol", "Innistrad", "ISD");
  }
}

module.exports = StromkirkPatrol;
