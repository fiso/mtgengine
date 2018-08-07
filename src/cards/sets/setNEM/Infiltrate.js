"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Infiltrate extends UnimplementedCard {
  constructor (game) {
    super(game, "Infiltrate", "Nemesis", "NEM");
  }
}

module.exports = Infiltrate;
