"use strict";
const Constants = require ("../../../Constants");
const UlamogsCrusherBase = require("../setDDP/UlamogsCrusher");

class UlamogsCrusher extends UlamogsCrusherBase {
  constructor(game) {
    super(game, "Ulamog's Crusher", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = UlamogsCrusher;
