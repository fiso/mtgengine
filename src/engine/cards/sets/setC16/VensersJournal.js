"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VensersJournal extends UnimplementedCard {
  constructor (game) {
    super(game, "Venser's Journal", "Commander 2016", "C16");
  }
}

module.exports = VensersJournal;
