"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TemperedSteel extends UnimplementedCard {
  constructor (game) {
    super(game, "Tempered Steel", "Scars of Mirrodin", "SOM");
  }
}

module.exports = TemperedSteel;
