"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const FieldmistBorderpostBase = require("../setARB/FieldmistBorderpost.js");

class FieldmistBorderpost extends FieldmistBorderpostBase {
  constructor(game) {
    super(game, "Fieldmist Borderpost", "Archenemy", "ARC");
  }
}

module.exports = FieldmistBorderpost;
