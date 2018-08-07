"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ManaforgeCinder extends UnimplementedCard {
  constructor (game) {
    super(game, "Manaforge Cinder", "Shadowmoor", "SHM");
  }
}

module.exports = ManaforgeCinder;
