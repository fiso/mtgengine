"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HanweirBattlements extends UnimplementedCard {
  constructor (game) {
    super(game, "Hanweir Battlements", "Eldritch Moon", "EMN");
  }
}

module.exports = HanweirBattlements;
