"use strict";
const Constants = require ("../../../Constants");
const KnightofMeadowgrainBase = require("../setDDG/KnightofMeadowgrain");

class KnightofMeadowgrain extends KnightofMeadowgrainBase {
  constructor (game) {
    super(game, "Knight of Meadowgrain", "Lorwyn", "LRW");
  }
}

module.exports = KnightofMeadowgrain;
