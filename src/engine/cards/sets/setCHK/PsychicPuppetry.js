"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PsychicPuppetry extends UnimplementedCard {
  constructor (game) {
    super(game, "Psychic Puppetry", "Champions of Kamigawa", "CHK");
  }
}

module.exports = PsychicPuppetry;
