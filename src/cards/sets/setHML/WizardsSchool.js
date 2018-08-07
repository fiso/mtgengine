"use strict";
const Constants = require ("../../../Constants");
const WizardsSchoolBase = require("../setPTC/WizardsSchool");

class WizardsSchool extends WizardsSchoolBase {
  constructor (game) {
    super(game, "Wizards' School", "Homelands", "HML");
  }
}

module.exports = WizardsSchool;
