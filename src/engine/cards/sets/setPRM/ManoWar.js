"use strict";
const Constants = require ("../../../Constants");
const ManoWarBase = require("../setA25/ManoWar");

class ManoWar extends ManoWarBase {
  constructor (game) {
    super(game, "Man-o'-War", "Magic Online Promos", "PRM");
  }
}

module.exports = ManoWar;
