"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LightningAngel extends UnimplementedCard {
  constructor (game) {
    super(game, "Lightning Angel", "Apocalypse", "APC");
  }
}

module.exports = LightningAngel;
