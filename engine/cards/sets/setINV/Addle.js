"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Addle extends UnimplementedCard {
  constructor(game) {
    super(game, "Addle", "Invasion", "INV");
  }
}

module.exports = Addle;
