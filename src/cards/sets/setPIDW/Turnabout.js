"use strict";
const Constants = require ("../../../Constants");
const TurnaboutBase = require("../setVMA/Turnabout");

class Turnabout extends TurnaboutBase {
  constructor (game) {
    super(game, "Turnabout", "IDW Comics 2012", "PIDW");
  }
}

module.exports = Turnabout;
