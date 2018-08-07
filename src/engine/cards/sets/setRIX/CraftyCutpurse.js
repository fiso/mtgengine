"use strict";
const Constants = require ("../../../Constants");
const CraftyCutpurseBase = require("../setPRIX/CraftyCutpurse");

class CraftyCutpurse extends CraftyCutpurseBase {
  constructor (game) {
    super(game, "Crafty Cutpurse", "Rivals of Ixalan", "RIX");
  }
}

module.exports = CraftyCutpurse;
