"use strict";
const Constants = require ("../../../Constants");
const PyreChargerBase = require("../setJVC/PyreCharger");

class PyreCharger extends PyreChargerBase {
  constructor (game) {
    super(game, "Pyre Charger", "Duel Decks: Jace vs. Chandra", "DD2");
  }
}

module.exports = PyreCharger;
