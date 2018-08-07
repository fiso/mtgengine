"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class OlBuzzbark extends UnimplementedCard {
  constructor (game) {
    super(game, "Ol' Buzzbark", "Unstable", "UST");
  }
}

module.exports = OlBuzzbark;
