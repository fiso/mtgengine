"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Shadowbane extends UnimplementedCard {
  constructor (game) {
    super(game, "Shadowbane", "Mirage", "MIR");
  }
}

module.exports = Shadowbane;
