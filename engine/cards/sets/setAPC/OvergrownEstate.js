"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class OvergrownEstate extends UnimplementedCard {
  constructor(game) {
    super(game, "Overgrown Estate", "Apocalypse", "APC");
  }
}

module.exports = OvergrownEstate;
