"use strict";
const Constants = require ("../../../Constants");
const CurseofWizardryBase = require("../setROE/CurseofWizardry");

class CurseofWizardry extends CurseofWizardryBase {
  constructor (game) {
    super(game, "Curse of Wizardry", "Wizards Play Network 2010", "PWP10");
  }
}

module.exports = CurseofWizardry;
