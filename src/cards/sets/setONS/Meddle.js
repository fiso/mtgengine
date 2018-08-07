"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Meddle extends UnimplementedCard {
  constructor (game) {
    super(game, "Meddle", "Onslaught", "ONS");
  }
}

module.exports = Meddle;
