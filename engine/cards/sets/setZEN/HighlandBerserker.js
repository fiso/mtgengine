"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HighlandBerserker extends UnimplementedCard {
  constructor(game) {
    super(game, "Highland Berserker", "Zendikar", "ZEN");
  }
}

module.exports = HighlandBerserker;
