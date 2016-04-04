"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const VacuumeltBase = require("../setDDJ/Vacuumelt.js");

class Vacuumelt extends VacuumeltBase {
  constructor(game) {
    super(game, "Vacuumelt", "Guildpact", "GPT");
  }
}

module.exports = Vacuumelt;
