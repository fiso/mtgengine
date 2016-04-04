"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ControlMagicBase = require("../setBRB/ControlMagic.js");

class ControlMagic extends ControlMagicBase {
  constructor(game) {
    super(game, "Control Magic", "Unlimited Edition", "2ED");
  }
}

module.exports = ControlMagic;
