"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MakeaStand extends UnimplementedCard {
  constructor(game) {
    super(game, "Make a Stand", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = MakeaStand;
