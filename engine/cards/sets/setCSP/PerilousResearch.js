"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PerilousResearch extends UnimplementedCard {
  constructor(game) {
    super(game, "Perilous Research", "Coldsnap", "CSP");
  }
}

module.exports = PerilousResearch;
