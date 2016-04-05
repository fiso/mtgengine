"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class UnstableFooting extends UnimplementedCard {
  constructor(game) {
    super(game, "Unstable Footing", "Zendikar", "ZEN");
  }
}

module.exports = UnstableFooting;
