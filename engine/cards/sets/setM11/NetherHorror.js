"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NetherHorror extends UnimplementedCard {
  constructor(game) {
    super(game, "Nether Horror", "Magic 2011", "M11");
  }
}

module.exports = NetherHorror;
