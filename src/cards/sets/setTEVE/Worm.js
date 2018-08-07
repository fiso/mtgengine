"use strict";
const Constants = require ("../../../Constants");
const WormBase = require("../setTC18/Worm");

class Worm extends WormBase {
  constructor (game) {
    super(game, "Worm", "Eventide Tokens", "TEVE");
  }
}

module.exports = Worm;
