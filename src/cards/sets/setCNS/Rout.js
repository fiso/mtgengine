"use strict";
const Constants = require ("../../../Constants");
const RoutBase = require("../setINV/Rout");

class Rout extends RoutBase {
  constructor (game) {
    super(game, "Rout", "Magic: The Gathering—Conspiracy", "CNS");
  }
}

module.exports = Rout;
