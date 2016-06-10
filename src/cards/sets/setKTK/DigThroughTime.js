"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DigThroughTime extends UnimplementedCard {
  constructor (game) {
    super(game, "Dig Through Time", "Khans of Tarkir", "KTK");
  }
}

module.exports = DigThroughTime;
