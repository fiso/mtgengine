"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class YavimayaDryad extends UnimplementedCard {
  constructor(game) {
    super(game, "Yavimaya Dryad", "Archenemy", "ARC");
  }
}

module.exports = YavimayaDryad;
