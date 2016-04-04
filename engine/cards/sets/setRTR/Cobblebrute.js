"use strict";
const Constants = require ("../../../Constants");
const CobblebruteBase = require("../setORI/Cobblebrute");

class Cobblebrute extends CobblebruteBase {
  constructor(game) {
    super(game, "Cobblebrute", "Return to Ravnica", "RTR");
  }
}

module.exports = Cobblebrute;
