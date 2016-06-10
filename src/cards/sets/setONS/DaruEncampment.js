"use strict";
const Constants = require ("../../../Constants");
const DaruEncampmentBase = require("../setDDF/DaruEncampment");

class DaruEncampment extends DaruEncampmentBase {
  constructor (game) {
    super(game, "Daru Encampment", "Onslaught", "ONS");
  }
}

module.exports = DaruEncampment;
