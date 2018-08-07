"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Ensnare extends UnimplementedCard {
  constructor (game) {
    super(game, "Ensnare", "Nemesis", "NEM");
  }
}

module.exports = Ensnare;
