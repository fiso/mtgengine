"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WindriderEel extends UnimplementedCard {
  constructor (game) {
    super(game, "Windrider Eel", "Zendikar", "ZEN");
  }
}

module.exports = WindriderEel;
