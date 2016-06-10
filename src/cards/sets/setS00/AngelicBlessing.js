"use strict";
const Constants = require ("../../../Constants");
const AngelicBlessingBase = require("../setEXO/AngelicBlessing");

class AngelicBlessing extends AngelicBlessingBase {
  constructor (game) {
    super(game, "Angelic Blessing", "Starter 2000", "S00");
  }
}

module.exports = AngelicBlessing;
