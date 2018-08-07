"use strict";
const Constants = require ("../../../Constants");
const NaruMehaMasterWizardBase = require("../setDOM/NaruMehaMasterWizard");

class NaruMehaMasterWizard extends NaruMehaMasterWizardBase {
  constructor (game) {
    super(game, "Naru Meha, Master Wizard", "Dominaria Promos", "PDOM");
  }
}

module.exports = NaruMehaMasterWizard;
