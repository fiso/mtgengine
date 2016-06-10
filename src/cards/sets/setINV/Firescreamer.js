"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Firescreamer extends UnimplementedCard {
  constructor (game) {
    super(game, "Firescreamer", "Invasion", "INV");
  }
}

module.exports = Firescreamer;
