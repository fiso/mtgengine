"use strict";
const Constants = require ("../../../Constants");
const RedElementalBlastBase = require("../setA25/RedElementalBlast");

class RedElementalBlast extends RedElementalBlastBase {
  constructor (game) {
    super(game, "Red Elemental Blast", "Revised Edition", "3ED");
  }
}

module.exports = RedElementalBlast;
