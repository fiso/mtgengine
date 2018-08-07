"use strict";
const Constants = require ("../../../Constants");
const RootwallaBase = require("../setW17/Rootwalla");

class Rootwalla extends RootwallaBase {
  constructor (game) {
    super(game, "Rootwalla", "Tempest", "TMP");
  }
}

module.exports = Rootwalla;
