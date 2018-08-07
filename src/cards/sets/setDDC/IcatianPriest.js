"use strict";
const Constants = require ("../../../Constants");
const IcatianPriestBase = require("../setDVD/IcatianPriest");

class IcatianPriest extends IcatianPriestBase {
  constructor (game) {
    super(game, "Icatian Priest", "Duel Decks: Divine vs. Demonic", "DDC");
  }
}

module.exports = IcatianPriest;
