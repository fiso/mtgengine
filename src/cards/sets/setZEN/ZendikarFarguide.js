"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ZendikarFarguide extends UnimplementedCard {
  constructor (game) {
    super(game, "Zendikar Farguide", "Zendikar", "ZEN");
  }
}

module.exports = ZendikarFarguide;
