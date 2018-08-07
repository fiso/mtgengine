"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Dismember extends UnimplementedCard {
  constructor (game) {
    super(game, "Dismember", "Modern Masters 2015", "MM2");
  }
}

module.exports = Dismember;
