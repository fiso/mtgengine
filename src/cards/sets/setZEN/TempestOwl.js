"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TempestOwl extends UnimplementedCard {
  constructor (game) {
    super(game, "Tempest Owl", "Zendikar", "ZEN");
  }
}

module.exports = TempestOwl;
