"use strict";
const Constants = require ("../../../Constants");
const MurkDwellersBase = require("../set5ED/MurkDwellers");

class MurkDwellers extends MurkDwellersBase {
  constructor(game) {
    super(game, "Murk Dwellers", "Rivals Quick Start Set", "RQS");
  }
}

module.exports = MurkDwellers;
