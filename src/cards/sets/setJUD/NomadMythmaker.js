"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NomadMythmaker extends UnimplementedCard {
  constructor(game) {
    super(game, "Nomad Mythmaker", "Judgment", "JUD");
  }
}

module.exports = NomadMythmaker;
