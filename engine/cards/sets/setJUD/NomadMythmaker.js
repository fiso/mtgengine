"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class NomadMythmaker extends Card {
  constructor(game) {
    super(game, "Nomad Mythmaker", "Judgment", "JUD");
  }
}

module.exports = NomadMythmaker;
