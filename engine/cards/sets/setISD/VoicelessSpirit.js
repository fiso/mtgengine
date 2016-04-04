"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class VoicelessSpirit extends Card {
  constructor(game) {
    super(game, "Voiceless Spirit", "Innistrad", "ISD");
  }
}

module.exports = VoicelessSpirit;
