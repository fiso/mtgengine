"use strict";
const Constants = require ("../../../Constants");
const ManoWarBase = require("../setpARL/ManoWar");

class ManoWar extends ManoWarBase {
  constructor(game) {
    super(game, "Man-o'-War", "Starter 1999", "S99");
  }
}

module.exports = ManoWar;
