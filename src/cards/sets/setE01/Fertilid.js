"use strict";
const Constants = require ("../../../Constants");
const FertilidBase = require("../setBBD/Fertilid");

class Fertilid extends FertilidBase {
  constructor (game) {
    super(game, "Fertilid", "Archenemy: Nicol Bolas", "E01");
  }
}

module.exports = Fertilid;
