"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Vindicate extends UnimplementedCard {
  constructor(game) {
    super(game, "Vindicate", "Apocalypse", "APC");
  }
}

module.exports = Vindicate;
