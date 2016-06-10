"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WaywardAngel extends UnimplementedCard {
  constructor (game) {
    super(game, "Wayward Angel", "Odyssey", "ODY");
  }
}

module.exports = WaywardAngel;
