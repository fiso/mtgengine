"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ManiacalRageBase = require("../setBRB/ManiacalRage.js");

class ManiacalRage extends ManiacalRageBase {
  constructor(game) {
    super(game, "Maniacal Rage", "Conflux", "CON");
  }
}

module.exports = ManiacalRage;
