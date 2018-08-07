"use strict";
const Constants = require ("../../../Constants");
const KrosaBase = require("../setPCA/Krosa");

class Krosa extends KrosaBase {
  constructor (game) {
    super(game, "Krosa", "Planechase", "HOP");
  }
}

module.exports = Krosa;
