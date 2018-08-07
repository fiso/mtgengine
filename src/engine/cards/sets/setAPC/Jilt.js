"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Jilt extends UnimplementedCard {
  constructor (game) {
    super(game, "Jilt", "Apocalypse", "APC");
  }
}

module.exports = Jilt;
