"use strict";
const Constants = require ("../../../Constants");
const BaneslayerAngelBase = require("../setV15/BaneslayerAngel");

class BaneslayerAngel extends BaneslayerAngelBase {
  constructor(game) {
    super(game, "Baneslayer Angel", "Magic 2010", "M10");
  }
}

module.exports = BaneslayerAngel;
