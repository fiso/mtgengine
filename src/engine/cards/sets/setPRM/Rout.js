"use strict";
const Constants = require ("../../../Constants");
const RoutBase = require("../setC17/Rout");

class Rout extends RoutBase {
  constructor (game) {
    super(game, "Rout", "Magic Online Promos", "PRM");
  }
}

module.exports = Rout;
