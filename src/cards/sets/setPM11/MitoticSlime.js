"use strict";
const Constants = require ("../../../Constants");
const MitoticSlimeBase = require("../setPCA/MitoticSlime");

class MitoticSlime extends MitoticSlimeBase {
  constructor (game) {
    super(game, "Mitotic Slime", "Magic 2011 Promos", "PM11");
  }
}

module.exports = MitoticSlime;
