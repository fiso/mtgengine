"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AmuletofQuoz extends UnimplementedCard {
  constructor (game) {
    super(game, "Amulet of Quoz", "Ice Age", "ICE");
  }
}

module.exports = AmuletofQuoz;
