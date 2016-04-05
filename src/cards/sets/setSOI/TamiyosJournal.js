"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TamiyosJournal extends UnimplementedCard {
  constructor(game) {
    super(game, "Tamiyo's Journal", "Shadows over Innistrad", "SOI");
  }
}

module.exports = TamiyosJournal;
