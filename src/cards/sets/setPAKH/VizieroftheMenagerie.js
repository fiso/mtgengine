"use strict";
const Constants = require ("../../../Constants");
const VizieroftheMenagerieBase = require("../setAKH/VizieroftheMenagerie");

class VizieroftheMenagerie extends VizieroftheMenagerieBase {
  constructor (game) {
    super(game, "Vizier of the Menagerie", "Amonkhet Promos", "PAKH");
  }
}

module.exports = VizieroftheMenagerie;
