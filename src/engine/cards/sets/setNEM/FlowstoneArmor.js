"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FlowstoneArmor extends UnimplementedCard {
  constructor (game) {
    super(game, "Flowstone Armor", "Nemesis", "NEM");
  }
}

module.exports = FlowstoneArmor;
