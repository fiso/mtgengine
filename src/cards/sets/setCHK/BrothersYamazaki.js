"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BrothersYamazaki extends UnimplementedCard {
  constructor (game) {
    super(game, "Brothers Yamazaki", "Champions of Kamigawa", "CHK");
  }
}

module.exports = BrothersYamazaki;
