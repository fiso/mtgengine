"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EtherealArmor extends UnimplementedCard {
  constructor (game) {
    super(game, "Ethereal Armor", "Return to Ravnica", "RTR");
  }
}

module.exports = EtherealArmor;
