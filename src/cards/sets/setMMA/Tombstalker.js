"use strict";
const Constants = require ("../../../Constants");
const TombstalkerBase = require("../setFUT/Tombstalker");

class Tombstalker extends TombstalkerBase {
  constructor (game) {
    super(game, "Tombstalker", "Modern Masters", "MMA");
  }
}

module.exports = Tombstalker;
