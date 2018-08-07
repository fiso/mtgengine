"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SideQuest extends UnimplementedCard {
  constructor (game) {
    super(game, "Side Quest", "Unstable", "UST");
  }
}

module.exports = SideQuest;
