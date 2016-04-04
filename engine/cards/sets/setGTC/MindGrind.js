"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MindGrind extends UnimplementedCard {
  constructor(game) {
    super(game, "Mind Grind", "Gatecrash", "GTC");
  }
}

module.exports = MindGrind;
