"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const UlamogsCrusherBase = require("../setDDP/UlamogsCrusher.js");

class UlamogsCrusher extends UlamogsCrusherBase {
  constructor(game) {
    super(game, "Ulamog's Crusher", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = UlamogsCrusher;
