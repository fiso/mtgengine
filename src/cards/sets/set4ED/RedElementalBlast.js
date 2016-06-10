"use strict";
const Constants = require ("../../../Constants");
const RedElementalBlastBase = require("../setCED/RedElementalBlast");

class RedElementalBlast extends RedElementalBlastBase {
  constructor (game) {
    super(game, "Red Elemental Blast", "Fourth Edition", "4ED");
  }
}

module.exports = RedElementalBlast;
