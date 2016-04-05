"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Illuminate extends UnimplementedCard {
  constructor(game) {
    super(game, "Illuminate", "Apocalypse", "APC");
  }
}

module.exports = Illuminate;
