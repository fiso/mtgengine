"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ScavengingScarab extends Card {
  constructor(game) {
    super(game, "Scavenging Scarab", "Darksteel", "DST");
  }
}

module.exports = ScavengingScarab;
