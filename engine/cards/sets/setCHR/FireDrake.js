"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FireDrake extends UnimplementedCard {
  constructor(game) {
    super(game, "Fire Drake", "Chronicles", "CHR");
  }
}

module.exports = FireDrake;
