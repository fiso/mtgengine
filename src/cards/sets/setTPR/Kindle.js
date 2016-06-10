"use strict";
const Constants = require ("../../../Constants");
const KindleBase = require("../setTMP/Kindle");

class Kindle extends KindleBase {
  constructor (game) {
    super(game, "Kindle", "Tempest Remastered", "TPR");
  }
}

module.exports = Kindle;
