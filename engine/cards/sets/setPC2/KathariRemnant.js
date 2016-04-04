"use strict";
const Constants = require ("../../../Constants");
const KathariRemnantBase = require("../setARB/KathariRemnant");

class KathariRemnant extends KathariRemnantBase {
  constructor(game) {
    super(game, "Kathari Remnant", "Planechase 2012 Edition", "PC2");
  }
}

module.exports = KathariRemnant;
