"use strict";
const Constants = require ("../../../Constants");
const CapsizeBase = require("../setMP2/Capsize");

class Capsize extends CapsizeBase {
  constructor (game) {
    super(game, "Capsize", "Friday Night Magic 2003", "F03");
  }
}

module.exports = Capsize;
