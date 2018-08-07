"use strict";
const Constants = require ("../../../Constants");
const TamiyosJournalBase = require("../setSOI/TamiyosJournal");

class TamiyosJournal extends TamiyosJournalBase {
  constructor (game) {
    super(game, "Tamiyo's Journal", "Shadows over Innistrad Promos", "PSOI");
  }
}

module.exports = TamiyosJournal;
