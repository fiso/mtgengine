"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MindBend extends UnimplementedCard {
  constructor (game) {
    super(game, "Mind Bend", "Tenth Edition", "10E");
  }
}

module.exports = MindBend;
