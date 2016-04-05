"use strict";
const Constants = require ("../../../Constants");
const BaneslayerAngelBase = require("../setV15/BaneslayerAngel");

class BaneslayerAngel extends BaneslayerAngelBase {
  constructor(game) {
    super(game, "Baneslayer Angel", "Magic 2011", "M11");
  }
}

module.exports = BaneslayerAngel;
