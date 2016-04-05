"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class JoragaAuxiliary extends UnimplementedCard {
  constructor(game) {
    super(game, "Joraga Auxiliary", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = JoragaAuxiliary;
