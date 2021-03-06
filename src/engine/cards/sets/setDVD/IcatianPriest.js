"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class IcatianPriest extends UnimplementedCard {
  constructor (game) {
    super(game, "Icatian Priest", "Duel Decks Anthology: Divine vs. Demonic", "DVD");
  }
}

module.exports = IcatianPriest;
