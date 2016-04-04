"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CennsEnlistmentBase = require("../setEVE/CennsEnlistment.js");

class CennsEnlistment extends CennsEnlistmentBase {
  constructor(game) {
    super(game, "Cenn's Enlistment", "Modern Masters", "MMA");
  }
}

module.exports = CennsEnlistment;
