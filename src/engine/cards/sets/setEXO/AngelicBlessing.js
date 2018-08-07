"use strict";
const Constants = require ("../../../Constants");
const AngelicBlessingBase = require("../setTPR/AngelicBlessing");

class AngelicBlessing extends AngelicBlessingBase {
  constructor (game) {
    super(game, "Angelic Blessing", "Exodus", "EXO");
  }
}

module.exports = AngelicBlessing;
