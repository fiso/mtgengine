"use strict";
const Constants = require ("../../../Constants");
const TopanFreebladeBase = require("../setIMA/TopanFreeblade");

class TopanFreeblade extends TopanFreebladeBase {
  constructor (game) {
    super(game, "Topan Freeblade", "Magic Origins", "ORI");
  }
}

module.exports = TopanFreeblade;
