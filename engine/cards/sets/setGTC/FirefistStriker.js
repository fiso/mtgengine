"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FirefistStriker extends UnimplementedCard {
  constructor(game) {
    super(game, "Firefist Striker", "Gatecrash", "GTC");
  }
}

module.exports = FirefistStriker;
