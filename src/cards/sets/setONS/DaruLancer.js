"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DaruLancer extends UnimplementedCard {
  constructor (game) {
    super(game, "Daru Lancer", "Onslaught", "ONS");
  }
}

module.exports = DaruLancer;
