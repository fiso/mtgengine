"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ProteusStaff extends UnimplementedCard {
  constructor (game) {
    super(game, "Proteus Staff", "Mirrodin", "MRD");
  }
}

module.exports = ProteusStaff;
