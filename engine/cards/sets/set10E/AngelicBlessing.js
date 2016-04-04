"use strict";
const Constants = require ("../../../Constants");
const AngelicBlessingBase = require("../setEXO/AngelicBlessing");

class AngelicBlessing extends AngelicBlessingBase {
  constructor(game) {
    super(game, "Angelic Blessing", "Tenth Edition", "10E");
  }
}

module.exports = AngelicBlessing;
