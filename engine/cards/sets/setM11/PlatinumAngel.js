"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PlatinumAngelBase = require("../setV15/PlatinumAngel.js");

class PlatinumAngel extends PlatinumAngelBase {
  constructor(game) {
    super(game, "Platinum Angel", "Magic 2011", "M11");
  }
}

module.exports = PlatinumAngel;
