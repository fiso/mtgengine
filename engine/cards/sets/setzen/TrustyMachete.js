"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TrustyMachete extends UnimplementedCard {
  constructor(game) {
    super(game, "Trusty Machete", "Zendikar", "ZEN");
  }
}

module.exports = TrustyMachete;
