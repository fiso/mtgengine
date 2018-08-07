"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Heartmender extends UnimplementedCard {
  constructor (game) {
    super(game, "Heartmender", "Shadowmoor", "SHM");
  }
}

module.exports = Heartmender;
