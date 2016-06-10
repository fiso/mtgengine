"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VoicelessSpirit extends UnimplementedCard {
  constructor (game) {
    super(game, "Voiceless Spirit", "Innistrad", "ISD");
  }
}

module.exports = VoicelessSpirit;
