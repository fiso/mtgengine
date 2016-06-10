"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SuqAtaLancer extends UnimplementedCard {
  constructor (game) {
    super(game, "Suq'Ata Lancer", "Time Spiral \"Timeshifted\"", "TSB");
  }
}

module.exports = SuqAtaLancer;
