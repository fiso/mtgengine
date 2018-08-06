"use strict";
const Constants = require ("../../../Constants");
const ManoWarBase = require("../setpARL/ManoWar");

class ManoWar extends ManoWarBase {
  constructor (game) {
    super(game, "Man-o'-War", "Eternal Masters", "EMA");
  }
}

module.exports = ManoWar;
