"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MasterofDiversion extends UnimplementedCard {
  constructor (game) {
    super(game, "Master of Diversion", "Magic 2014", "M14");
  }
}

module.exports = MasterofDiversion;
