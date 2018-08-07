"use strict";
const Constants = require ("../../../Constants");
const TreasonousOgreBase = require("../setPZ2/TreasonousOgre");

class TreasonousOgre extends TreasonousOgreBase {
  constructor (game) {
    super(game, "Treasonous Ogre", "Conspiracy", "CNS");
  }
}

module.exports = TreasonousOgre;
