"use strict";
const Constants = require ("../../../Constants");
const VensersJournalBase = require("../setC16/VensersJournal");

class VensersJournal extends VensersJournalBase {
  constructor (game) {
    super(game, "Venser's Journal", "Scars of Mirrodin", "SOM");
  }
}

module.exports = VensersJournal;
