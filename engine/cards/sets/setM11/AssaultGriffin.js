"use strict";
const Constants = require ("../../../Constants");
const AssaultGriffinBase = require("../setGTC/AssaultGriffin");

class AssaultGriffin extends AssaultGriffinBase {
  constructor(game) {
    super(game, "Assault Griffin", "Magic 2011", "M11");
  }
}

module.exports = AssaultGriffin;
