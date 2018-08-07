"use strict";
const Constants = require ("../../../Constants");
const EssenceWardenBase = require("../setCMA/EssenceWarden");

class EssenceWarden extends EssenceWardenBase {
  constructor (game) {
    super(game, "Essence Warden", "Commander 2014", "C14");
  }
}

module.exports = EssenceWarden;
