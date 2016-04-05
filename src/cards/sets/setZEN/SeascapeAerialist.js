"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SeascapeAerialist extends UnimplementedCard {
  constructor(game) {
    super(game, "Seascape Aerialist", "Zendikar", "ZEN");
  }
}

module.exports = SeascapeAerialist;
