"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SlitherBlade extends UnimplementedCard {
  constructor (game) {
    super(game, "Slither Blade", "Amonkhet", "AKH");
  }
}

module.exports = SlitherBlade;
