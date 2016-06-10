"use strict";
const Constants = require ("../../../Constants");
const CurseofWizardryBase = require("../setROE/CurseofWizardry");

class CurseofWizardry extends CurseofWizardryBase {
  constructor (game) {
    super(game, "Curse of Wizardry", "WPN and Gateway", "pWPN");
  }
}

module.exports = CurseofWizardry;
