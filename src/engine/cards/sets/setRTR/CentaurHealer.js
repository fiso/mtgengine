"use strict";
const Constants = require ("../../../Constants");
const CentaurHealerBase = require("../setBBD/CentaurHealer");

class CentaurHealer extends CentaurHealerBase {
  constructor (game) {
    super(game, "Centaur Healer", "Return to Ravnica", "RTR");
  }
}

module.exports = CentaurHealer;
