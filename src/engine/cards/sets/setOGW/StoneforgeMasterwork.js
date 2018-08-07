"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class StoneforgeMasterwork extends UnimplementedCard {
  constructor (game) {
    super(game, "Stoneforge Masterwork", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = StoneforgeMasterwork;
