"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Chromium extends UnimplementedCard {
  constructor (game) {
    super(game, "Chromium", "Masters Edition III", "ME3");
  }
}

module.exports = Chromium;
