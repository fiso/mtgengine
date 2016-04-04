"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const RitualofSubdualBase = require("../setICE/RitualofSubdual.js");

class RitualofSubdual extends RitualofSubdualBase {
  constructor(game) {
    super(game, "Ritual of Subdual", "Masters Edition II", "ME2");
  }
}

module.exports = RitualofSubdual;
