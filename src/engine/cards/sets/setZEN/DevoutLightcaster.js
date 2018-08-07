"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DevoutLightcaster extends UnimplementedCard {
  constructor (game) {
    super(game, "Devout Lightcaster", "Zendikar", "ZEN");
  }
}

module.exports = DevoutLightcaster;
