"use strict";
const Constants = require ("../../../Constants");
const WaterknotBase = require("../setMTGA/Waterknot");

class Waterknot extends WaterknotBase {
  constructor (game) {
    super(game, "Waterknot", "Core Set 2019", "M19");
  }
}

module.exports = Waterknot;
