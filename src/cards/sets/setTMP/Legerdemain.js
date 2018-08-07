"use strict";
const Constants = require ("../../../Constants");
const LegerdemainBase = require("../setTPR/Legerdemain");

class Legerdemain extends LegerdemainBase {
  constructor (game) {
    super(game, "Legerdemain", "Tempest", "TMP");
  }
}

module.exports = Legerdemain;
