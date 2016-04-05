"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BalduvianRage extends UnimplementedCard {
  constructor(game) {
    super(game, "Balduvian Rage", "Coldsnap", "CSP");
  }
}

module.exports = BalduvianRage;
