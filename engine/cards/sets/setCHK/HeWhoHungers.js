"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HeWhoHungers extends UnimplementedCard {
  constructor(game) {
    super(game, "He Who Hungers", "Champions of Kamigawa", "CHK");
  }
}

module.exports = HeWhoHungers;
