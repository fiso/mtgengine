"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ForceofWill extends UnimplementedCard {
  constructor(game) {
    super(game, "Force of Will", "Alliances", "ALL");
  }
}

module.exports = ForceofWill;
