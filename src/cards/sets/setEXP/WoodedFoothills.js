"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WoodedFoothills extends UnimplementedCard {
  constructor (game) {
    super(game, "Wooded Foothills", "Zendikar Expeditions", "EXP");
  }
}

module.exports = WoodedFoothills;
