"use strict";
const Constants = require ("../../../Constants");
const TurnaboutBase = require("../setVMA/Turnabout");

class Turnabout extends TurnaboutBase {
  constructor (game) {
    super(game, "Turnabout", "Urza's Saga", "USG");
  }
}

module.exports = Turnabout;
