"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LaccolithGrunt extends UnimplementedCard {
  constructor (game) {
    super(game, "Laccolith Grunt", "Nemesis", "NEM");
  }
}

module.exports = LaccolithGrunt;
