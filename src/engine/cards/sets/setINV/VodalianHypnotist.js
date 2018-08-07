"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VodalianHypnotist extends UnimplementedCard {
  constructor (game) {
    super(game, "Vodalian Hypnotist", "Invasion", "INV");
  }
}

module.exports = VodalianHypnotist;
