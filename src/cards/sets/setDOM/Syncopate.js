"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Syncopate extends UnimplementedCard {
  constructor (game) {
    super(game, "Syncopate", "Dominaria", "DOM");
  }
}

module.exports = Syncopate;
