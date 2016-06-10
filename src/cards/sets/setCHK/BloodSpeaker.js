"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BloodSpeaker extends UnimplementedCard {
  constructor (game) {
    super(game, "Blood Speaker", "Champions of Kamigawa", "CHK");
  }
}

module.exports = BloodSpeaker;
