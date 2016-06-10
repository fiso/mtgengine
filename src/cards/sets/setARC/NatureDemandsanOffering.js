"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NatureDemandsanOffering extends UnimplementedCard {
  constructor (game) {
    super(game, "Nature Demands an Offering", "Archenemy", "ARC");
  }
}

module.exports = NatureDemandsanOffering;
