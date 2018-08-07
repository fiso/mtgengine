"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SplitScreen extends UnimplementedCard {
  constructor (game) {
    super(game, "Split Screen", "Unstable", "UST");
  }
}

module.exports = SplitScreen;
