"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const RedElementalBlastBase = require("../setCED/RedElementalBlast.js");

class RedElementalBlast extends RedElementalBlastBase {
  constructor(game) {
    super(game, "Red Elemental Blast", "Masters Edition IV", "ME4");
  }
}

module.exports = RedElementalBlast;
