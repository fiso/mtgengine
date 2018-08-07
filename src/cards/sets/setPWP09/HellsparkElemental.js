"use strict";
const Constants = require ("../../../Constants");
const HellsparkElementalBase = require("../setDDK/HellsparkElemental");

class HellsparkElemental extends HellsparkElementalBase {
  constructor (game) {
    super(game, "Hellspark Elemental", "Wizards Play Network 2009", "PWP09");
  }
}

module.exports = HellsparkElemental;
