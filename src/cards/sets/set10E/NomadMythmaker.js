"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NomadMythmaker extends UnimplementedCard {
  constructor (game) {
    super(game, "Nomad Mythmaker", "Tenth Edition", "10E");
  }
}

module.exports = NomadMythmaker;
