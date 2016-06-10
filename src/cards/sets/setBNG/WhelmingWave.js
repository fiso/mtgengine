"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WhelmingWave extends UnimplementedCard {
  constructor (game) {
    super(game, "Whelming Wave", "Born of the Gods", "BNG");
  }
}

module.exports = WhelmingWave;
