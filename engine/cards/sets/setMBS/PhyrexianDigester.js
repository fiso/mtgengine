"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PhyrexianDigester extends Card {
  constructor(game) {
    super(game, "Phyrexian Digester", "Mirrodin Besieged", "MBS");
  }
}

module.exports = PhyrexianDigester;
