"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WoodedBastion extends UnimplementedCard {
  constructor (game) {
    super(game, "Wooded Bastion", "Zendikar Expeditions", "EXP");
  }
}

module.exports = WoodedBastion;
