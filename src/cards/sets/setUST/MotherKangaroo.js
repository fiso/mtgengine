"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MotherKangaroo extends UnimplementedCard {
  constructor (game) {
    super(game, "Mother Kangaroo", "Unstable", "UST");
  }
}

module.exports = MotherKangaroo;
