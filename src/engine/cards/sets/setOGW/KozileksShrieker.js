"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KozileksShrieker extends UnimplementedCard {
  constructor (game) {
    super(game, "Kozilek's Shrieker", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = KozileksShrieker;
