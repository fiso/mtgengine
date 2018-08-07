"use strict";
const Constants = require ("../../../Constants");
const KytheonsIrregularsBase = require("../setPORI/KytheonsIrregulars");

class KytheonsIrregulars extends KytheonsIrregularsBase {
  constructor (game) {
    super(game, "Kytheon's Irregulars", "Magic Origins", "ORI");
  }
}

module.exports = KytheonsIrregulars;
