"use strict";
const Constants = require ("../../../Constants");
const TerritorialHellkiteBase = require("../setC17/TerritorialHellkite");

class TerritorialHellkite extends TerritorialHellkiteBase {
  constructor (game) {
    super(game, "Territorial Hellkite", "You Make the Cube", "PZ2");
  }
}

module.exports = TerritorialHellkite;
