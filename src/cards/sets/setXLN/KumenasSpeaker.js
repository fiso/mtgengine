"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KumenasSpeaker extends UnimplementedCard {
  constructor (game) {
    super(game, "Kumena's Speaker", "Ixalan", "XLN");
  }
}

module.exports = KumenasSpeaker;
