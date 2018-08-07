"use strict";
const Constants = require ("../../../Constants");
const AngelicBlessingBase = require("../setTPR/AngelicBlessing");

class AngelicBlessing extends AngelicBlessingBase {
  constructor (game) {
    super(game, "Angelic Blessing", "Starter 2000", "S00");
  }
}

module.exports = AngelicBlessing;
