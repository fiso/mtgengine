"use strict";
const Constants = require ("../../../Constants");
const MeadowboonBase = require("../setMMA/Meadowboon");

class Meadowboon extends MeadowboonBase {
  constructor (game) {
    super(game, "Meadowboon", "Morningtide", "MOR");
  }
}

module.exports = Meadowboon;
