"use strict";
const Constants = require ("../../../Constants");
const ChokedEstuaryBase = require("../setSOI/ChokedEstuary");

class ChokedEstuary extends ChokedEstuaryBase {
  constructor (game) {
    super(game, "Choked Estuary", "Shadows over Innistrad Promos", "PSOI");
  }
}

module.exports = ChokedEstuary;
