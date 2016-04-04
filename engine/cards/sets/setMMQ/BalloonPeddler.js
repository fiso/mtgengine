"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BalloonPeddler extends UnimplementedCard {
  constructor(game) {
    super(game, "Balloon Peddler", "Mercadian Masques", "MMQ");
  }
}

module.exports = BalloonPeddler;
