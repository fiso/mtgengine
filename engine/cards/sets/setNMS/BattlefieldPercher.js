"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BattlefieldPercher extends UnimplementedCard {
  constructor(game) {
    super(game, "Battlefield Percher", "Nemesis", "NMS");
  }
}

module.exports = BattlefieldPercher;
