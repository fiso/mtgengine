"use strict";
const Constants = require ("../../../Constants");
const KamahlFistofKrosaBase = require("../setARC/KamahlFistofKrosa");

class KamahlFistofKrosa extends KamahlFistofKrosaBase {
  constructor(game) {
    super(game, "Kamahl, Fist of Krosa", "Onslaught", "ONS");
  }
}

module.exports = KamahlFistofKrosa;
