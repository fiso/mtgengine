"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GeneralTazri extends UnimplementedCard {
  constructor (game) {
    super(game, "General Tazri", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = GeneralTazri;
