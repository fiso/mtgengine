"use strict";
const Constants = require ("../../../Constants");
const RootwallaBase = require("../setM14/Rootwalla");

class Rootwalla extends RootwallaBase {
  constructor (game) {
    super(game, "Rootwalla", "Tempest", "TMP");
  }
}

module.exports = Rootwalla;
