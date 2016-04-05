"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GryffVanguard extends UnimplementedCard {
  constructor(game) {
    super(game, "Gryff Vanguard", "Avacyn Restored", "AVR");
  }
}

module.exports = GryffVanguard;
