"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AngelofRetribution extends UnimplementedCard {
  constructor(game) {
    super(game, "Angel of Retribution", "Torment", "TOR");
  }
}

module.exports = AngelofRetribution;
