"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RootSnare extends UnimplementedCard {
  constructor (game) {
    super(game, "Root Snare", "Core Set 2019", "M19");
  }
}

module.exports = RootSnare;
