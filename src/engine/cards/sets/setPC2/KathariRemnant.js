"use strict";
const Constants = require ("../../../Constants");
const KathariRemnantBase = require("../setPCA/KathariRemnant");

class KathariRemnant extends KathariRemnantBase {
  constructor (game) {
    super(game, "Kathari Remnant", "Planechase 2012", "PC2");
  }
}

module.exports = KathariRemnant;
