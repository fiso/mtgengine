"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EbonDragon extends UnimplementedCard {
  constructor (game) {
    super(game, "Ebon Dragon", "Masters Edition IV", "ME4");
  }
}

module.exports = EbonDragon;
