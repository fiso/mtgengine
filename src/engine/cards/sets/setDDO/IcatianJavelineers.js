"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class IcatianJavelineers extends UnimplementedCard {
  constructor (game) {
    super(game, "Icatian Javelineers", "Duel Decks: Elspeth vs. Kiora", "DDO");
  }
}

module.exports = IcatianJavelineers;
