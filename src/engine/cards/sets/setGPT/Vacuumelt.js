"use strict";
const Constants = require ("../../../Constants");
const VacuumeltBase = require("../setDDJ/Vacuumelt");

class Vacuumelt extends VacuumeltBase {
  constructor (game) {
    super(game, "Vacuumelt", "Guildpact", "GPT");
  }
}

module.exports = Vacuumelt;
