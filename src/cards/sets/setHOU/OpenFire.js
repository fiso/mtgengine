"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class OpenFire extends UnimplementedCard {
  constructor (game) {
    super(game, "Open Fire", "Hour of Devastation", "HOU");
  }
}

module.exports = OpenFire;
