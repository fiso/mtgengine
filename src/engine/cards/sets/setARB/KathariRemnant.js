"use strict";
const Constants = require ("../../../Constants");
const KathariRemnantBase = require("../setPCA/KathariRemnant");

class KathariRemnant extends KathariRemnantBase {
  constructor (game) {
    super(game, "Kathari Remnant", "Alara Reborn", "ARB");
  }
}

module.exports = KathariRemnant;
