"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ElvishBard extends UnimplementedCard {
  constructor (game) {
    super(game, "Elvish Bard", "Alliances", "ALL");
  }
}

module.exports = ElvishBard;
