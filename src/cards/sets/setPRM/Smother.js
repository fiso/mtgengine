"use strict";
const Constants = require ("../../../Constants");
const SmotherBase = require("../setDDP/Smother");

class Smother extends SmotherBase {
  constructor (game) {
    super(game, "Smother", "Magic Online Promos", "PRM");
  }
}

module.exports = Smother;
