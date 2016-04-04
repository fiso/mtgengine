"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Mirrorpool extends UnimplementedCard {
  constructor(game) {
    super(game, "Mirrorpool", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = Mirrorpool;
