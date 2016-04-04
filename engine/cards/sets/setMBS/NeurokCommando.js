"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class NeurokCommando extends Card {
  constructor(game) {
    super(game, "Neurok Commando", "Mirrodin Besieged", "MBS");
  }
}

module.exports = NeurokCommando;
