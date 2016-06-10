"use strict";
const Constants = require ("../../../Constants");
const KnightoftheWhiteOrchidBase = require("../setDDG/KnightoftheWhiteOrchid");

class KnightoftheWhiteOrchid extends KnightoftheWhiteOrchidBase {
  constructor (game) {
    super(game, "Knight of the White Orchid", "Shards of Alara", "ALA");
  }
}

module.exports = KnightoftheWhiteOrchid;
