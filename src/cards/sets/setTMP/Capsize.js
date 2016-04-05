"use strict";
const Constants = require ("../../../Constants");
const CapsizeBase = require("../setpFNM/Capsize");

class Capsize extends CapsizeBase {
  constructor(game) {
    super(game, "Capsize", "Tempest", "TMP");
  }
}

module.exports = Capsize;
