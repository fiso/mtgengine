"use strict";
const Constants = require ("../../../Constants");
const IcatianPriestBase = require("../setDD3_DVD/IcatianPriest");

class IcatianPriest extends IcatianPriestBase {
  constructor (game) {
    super(game, "Icatian Priest", "Duel Decks: Divine vs. Demonic", "DDC");
  }
}

module.exports = IcatianPriest;
