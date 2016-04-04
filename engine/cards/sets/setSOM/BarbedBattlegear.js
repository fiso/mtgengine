"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BarbedBattlegear extends UnimplementedCard {
  constructor(game) {
    super(game, "Barbed Battlegear", "Scars of Mirrodin", "SOM");
  }
}

module.exports = BarbedBattlegear;
