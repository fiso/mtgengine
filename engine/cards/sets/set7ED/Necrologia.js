"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const NecrologiaBase = require("../setEXO/Necrologia.js");

class Necrologia extends NecrologiaBase {
  constructor(game) {
    super(game, "Necrologia", "Seventh Edition", "7ED");
  }
}

module.exports = Necrologia;
