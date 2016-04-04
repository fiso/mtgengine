"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CurseofWizardryBase = require("../setROE/CurseofWizardry.js");

class CurseofWizardry extends CurseofWizardryBase {
  constructor(game) {
    super(game, "Curse of Wizardry", "WPN and Gateway", "pWPN");
  }
}

module.exports = CurseofWizardry;
