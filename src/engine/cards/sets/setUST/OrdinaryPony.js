"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class OrdinaryPony extends UnimplementedCard {
  constructor (game) {
    super(game, "Ordinary Pony", "Unstable", "UST");
  }
}

module.exports = OrdinaryPony;
