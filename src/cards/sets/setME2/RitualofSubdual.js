"use strict";
const Constants = require ("../../../Constants");
const RitualofSubdualBase = require("../setICE/RitualofSubdual");

class RitualofSubdual extends RitualofSubdualBase {
  constructor (game) {
    super(game, "Ritual of Subdual", "Masters Edition II", "ME2");
  }
}

module.exports = RitualofSubdual;
