"use strict";
const Constants = require ("../../../Constants");
const KarlovoftheGhostCouncilBase = require("../setPZ1/KarlovoftheGhostCouncil");

class KarlovoftheGhostCouncil extends KarlovoftheGhostCouncilBase {
  constructor (game) {
    super(game, "Karlov of the Ghost Council", "Commander 2015", "C15");
  }
}

module.exports = KarlovoftheGhostCouncil;
