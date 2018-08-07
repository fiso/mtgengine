"use strict";
const Constants = require ("../../../Constants");
const SaheeliRaiBase = require("../setKLD/SaheeliRai");

class SaheeliRai extends SaheeliRaiBase {
  constructor (game) {
    super(game, "Saheeli Rai", "Kaladesh Promos", "PKLD");
  }
}

module.exports = SaheeliRai;
