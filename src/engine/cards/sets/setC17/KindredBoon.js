"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KindredBoon extends UnimplementedCard {
  constructor (game) {
    super(game, "Kindred Boon", "Commander 2017", "C17");
  }
}

module.exports = KindredBoon;
