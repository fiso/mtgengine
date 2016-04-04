"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CalcidermBase = require("../setpGTW/Calciderm.js");

class Calciderm extends CalcidermBase {
  constructor(game) {
    super(game, "Calciderm", "Planar Chaos", "PLC");
  }
}

module.exports = Calciderm;
