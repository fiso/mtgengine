"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PastinFlames extends UnimplementedCard {
  constructor (game) {
    super(game, "Past in Flames", "Modern Masters 2017", "MM3");
  }
}

module.exports = PastinFlames;
