"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class StormcallerofKeranos extends UnimplementedCard {
  constructor(game) {
    super(game, "Stormcaller of Keranos", "Born of the Gods", "BNG");
  }
}

module.exports = StormcallerofKeranos;
