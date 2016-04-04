"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ScavengingScarab extends UnimplementedCard {
  constructor(game) {
    super(game, "Scavenging Scarab", "Darksteel", "DST");
  }
}

module.exports = ScavengingScarab;
