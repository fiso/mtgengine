"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Woebearer extends UnimplementedCard {
  constructor (game) {
    super(game, "Woebearer", "Mirrodin", "MRD");
  }
}

module.exports = Woebearer;
