"use strict";
const Constants = require ("../../../Constants");
const DismalBackwaterBase = require("../setDDQ/DismalBackwater");

class DismalBackwater extends DismalBackwaterBase {
  constructor (game) {
    super(game, "Dismal Backwater", "Fate Reforged", "FRF");
  }
}

module.exports = DismalBackwater;
