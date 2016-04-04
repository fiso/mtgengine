"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const EleshNornGrandCenobiteBase = require("../setpJGP/EleshNornGrandCenobite.js");

class EleshNornGrandCenobite extends EleshNornGrandCenobiteBase {
  constructor(game) {
    super(game, "Elesh Norn, Grand Cenobite", "New Phyrexia", "NPH");
  }
}

module.exports = EleshNornGrandCenobite;
