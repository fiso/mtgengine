"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BaneslayerAngelBase = require("../setV15/BaneslayerAngel.js");

class BaneslayerAngel extends BaneslayerAngelBase {
  constructor(game) {
    super(game, "Baneslayer Angel", "Magic 2010", "M10");
  }
}

module.exports = BaneslayerAngel;
