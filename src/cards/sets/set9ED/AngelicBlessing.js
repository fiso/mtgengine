"use strict";
const Constants = require ("../../../Constants");
const AngelicBlessingBase = require("../setEXO/AngelicBlessing");

class AngelicBlessing extends AngelicBlessingBase {
  constructor (game) {
    super(game, "Angelic Blessing", "Ninth Edition", "9ED");
  }
}

module.exports = AngelicBlessing;
