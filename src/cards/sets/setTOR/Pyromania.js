"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Pyromania extends UnimplementedCard {
  constructor (game) {
    super(game, "Pyromania", "Torment", "TOR");
  }
}

module.exports = Pyromania;
