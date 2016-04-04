"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const VeteranBodyguardBase = require("../setCED/VeteranBodyguard.js");

class VeteranBodyguard extends VeteranBodyguardBase {
  constructor(game) {
    super(game, "Veteran Bodyguard", "Unlimited Edition", "2ED");
  }
}

module.exports = VeteranBodyguard;
