"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PyreChargerBase = require("../setDD3_JVC/PyreCharger.js");

class PyreCharger extends PyreChargerBase {
  constructor(game) {
    super(game, "Pyre Charger", "Duel Decks: Jace vs. Chandra", "DD2");
  }
}

module.exports = PyreCharger;
