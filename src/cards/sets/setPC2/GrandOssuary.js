"use strict";
const Constants = require ("../../../Constants");
const GrandOssuaryBase = require("../setPCA/GrandOssuary");

class GrandOssuary extends GrandOssuaryBase {
  constructor (game) {
    super(game, "Grand Ossuary", "Planechase 2012", "PC2");
  }
}

module.exports = GrandOssuary;
