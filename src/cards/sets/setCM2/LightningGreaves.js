"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LightningGreaves extends UnimplementedCard {
  constructor (game) {
    super(game, "Lightning Greaves", "Commander Anthology Volume II", "CM2");
  }
}

module.exports = LightningGreaves;
