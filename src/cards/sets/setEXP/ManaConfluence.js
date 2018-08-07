"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ManaConfluence extends UnimplementedCard {
  constructor (game) {
    super(game, "Mana Confluence", "Zendikar Expeditions", "EXP");
  }
}

module.exports = ManaConfluence;
