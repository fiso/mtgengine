"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MarduHeartPiercer extends UnimplementedCard {
  constructor (game) {
    super(game, "Mardu Heart-Piercer", "Khans of Tarkir", "KTK");
  }
}

module.exports = MarduHeartPiercer;
