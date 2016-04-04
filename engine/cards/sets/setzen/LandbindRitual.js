"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LandbindRitual extends UnimplementedCard {
  constructor(game) {
    super(game, "Landbind Ritual", "Zendikar", "ZEN");
  }
}

module.exports = LandbindRitual;
