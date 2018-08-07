"use strict";
const Constants = require ("../../../Constants");
const PyreChargerBase = require("../setJVC/PyreCharger");

class PyreCharger extends PyreChargerBase {
  constructor (game) {
    super(game, "Pyre Charger", "Shadowmoor", "SHM");
  }
}

module.exports = PyreCharger;
