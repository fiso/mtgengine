"use strict";
const Constants = require ("../../../Constants");
const AssaultFormationBase = require("../setIMA/AssaultFormation");

class AssaultFormation extends AssaultFormationBase {
  constructor (game) {
    super(game, "Assault Formation", "Dragons of Tarkir", "DTK");
  }
}

module.exports = AssaultFormation;
