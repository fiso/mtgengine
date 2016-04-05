"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KozileksReturn extends UnimplementedCard {
  constructor(game) {
    super(game, "Kozilek's Return", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = KozileksReturn;
