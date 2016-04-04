"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const StrataScytheBase = require("../setC14/StrataScythe.js");

class StrataScythe extends StrataScytheBase {
  constructor(game) {
    super(game, "Strata Scythe", "Scars of Mirrodin", "SOM");
  }
}

module.exports = StrataScythe;
