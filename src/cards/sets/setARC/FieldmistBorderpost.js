"use strict";
const Constants = require ("../../../Constants");
const FieldmistBorderpostBase = require("../setARB/FieldmistBorderpost");

class FieldmistBorderpost extends FieldmistBorderpostBase {
  constructor (game) {
    super(game, "Fieldmist Borderpost", "Archenemy", "ARC");
  }
}

module.exports = FieldmistBorderpost;
