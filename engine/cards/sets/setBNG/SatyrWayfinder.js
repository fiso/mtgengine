"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SatyrWayfinder extends UnimplementedCard {
  constructor(game) {
    super(game, "Satyr Wayfinder", "Born of the Gods", "BNG");
  }
}

module.exports = SatyrWayfinder;
