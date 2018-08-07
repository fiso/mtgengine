"use strict";
const Constants = require ("../../../Constants");
const SvogthostheRestlessTombBase = require("../setCM2/SvogthostheRestlessTomb");

class SvogthostheRestlessTomb extends SvogthostheRestlessTombBase {
  constructor (game) {
    super(game, "Svogthos, the Restless Tomb", "Duel Decks: Izzet vs. Golgari", "DDJ");
  }
}

module.exports = SvogthostheRestlessTomb;
