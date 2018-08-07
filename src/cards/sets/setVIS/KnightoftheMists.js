"use strict";
const Constants = require ("../../../Constants");
const KnightoftheMistsBase = require("../setWC97/KnightoftheMists");

class KnightoftheMists extends KnightoftheMistsBase {
  constructor (game) {
    super(game, "Knight of the Mists", "Visions", "VIS");
  }
}

module.exports = KnightoftheMists;
