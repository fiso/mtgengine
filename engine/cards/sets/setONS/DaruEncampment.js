"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DaruEncampmentBase = require("../setDDF/DaruEncampment.js");

class DaruEncampment extends DaruEncampmentBase {
  constructor(game) {
    super(game, "Daru Encampment", "Onslaught", "ONS");
  }
}

module.exports = DaruEncampment;
