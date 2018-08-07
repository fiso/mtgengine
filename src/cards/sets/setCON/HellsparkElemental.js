"use strict";
const Constants = require ("../../../Constants");
const HellsparkElementalBase = require("../setDDK/HellsparkElemental");

class HellsparkElemental extends HellsparkElementalBase {
  constructor (game) {
    super(game, "Hellspark Elemental", "Conflux", "CON");
  }
}

module.exports = HellsparkElemental;
