"use strict";
const Constants = require ("../../../Constants");
const FieldmistBorderpostBase = require("../setARC/FieldmistBorderpost");

class FieldmistBorderpost extends FieldmistBorderpostBase {
  constructor (game) {
    super(game, "Fieldmist Borderpost", "Alara Reborn", "ARB");
  }
}

module.exports = FieldmistBorderpost;
