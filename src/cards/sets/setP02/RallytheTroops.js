"use strict";
const Constants = require ("../../../Constants");
const RallytheTroopsBase = require("../setPTK/RallytheTroops");

class RallytheTroops extends RallytheTroopsBase {
  constructor (game) {
    super(game, "Rally the Troops", "Portal Second Age", "P02");
  }
}

module.exports = RallytheTroops;
