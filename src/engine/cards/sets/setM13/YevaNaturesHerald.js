"use strict";
const Constants = require ("../../../Constants");
const YevaNaturesHeraldBase = require("../setDDU/YevaNaturesHerald");

class YevaNaturesHerald extends YevaNaturesHeraldBase {
  constructor (game) {
    super(game, "Yeva, Nature's Herald", "Magic 2013", "M13");
  }
}

module.exports = YevaNaturesHerald;
