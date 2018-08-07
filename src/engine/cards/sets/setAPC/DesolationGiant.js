"use strict";
const Constants = require ("../../../Constants");
const DesolationGiantBase = require("../setCM2/DesolationGiant");

class DesolationGiant extends DesolationGiantBase {
  constructor (game) {
    super(game, "Desolation Giant", "Apocalypse", "APC");
  }
}

module.exports = DesolationGiant;
