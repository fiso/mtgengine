"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MindBend extends UnimplementedCard {
  constructor(game) {
    super(game, "Mind Bend", "Eighth Edition", "8ED");
  }
}

module.exports = MindBend;
