"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class VodalianHypnotist extends Card {
  constructor(game) {
    super(game, "Vodalian Hypnotist", "Invasion", "INV");
  }
}

module.exports = VodalianHypnotist;
