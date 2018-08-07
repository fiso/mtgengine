"use strict";
const Constants = require ("../../../Constants");
const BoggartRamGangBase = require("../setPD2/BoggartRamGang");

class BoggartRamGang extends BoggartRamGangBase {
  constructor (game) {
    super(game, "Boggart Ram-Gang", "Gateway 2008", "PG08");
  }
}

module.exports = BoggartRamGang;
