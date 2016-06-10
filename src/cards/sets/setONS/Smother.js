"use strict";
const Constants = require ("../../../Constants");
const SmotherBase = require("../setDDP/Smother");

class Smother extends SmotherBase {
  constructor (game) {
    super(game, "Smother", "Onslaught", "ONS");
  }
}

module.exports = Smother;
