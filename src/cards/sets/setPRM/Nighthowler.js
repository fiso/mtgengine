"use strict";
const Constants = require ("../../../Constants");
const NighthowlerBase = require("../setC15/Nighthowler");

class Nighthowler extends NighthowlerBase {
  constructor (game) {
    super(game, "Nighthowler", "Magic Online Promos", "PRM");
  }
}

module.exports = Nighthowler;
