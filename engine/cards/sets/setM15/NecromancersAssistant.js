"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NecromancersAssistant extends UnimplementedCard {
  constructor(game) {
    super(game, "Necromancer's Assistant", "Magic 2015 Core Set", "M15");
  }
}

module.exports = NecromancersAssistant;
