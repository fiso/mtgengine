"use strict";
const Constants = require ("../../../Constants");
const CennsEnlistmentBase = require("../setEVE/CennsEnlistment");

class CennsEnlistment extends CennsEnlistmentBase {
  constructor(game) {
    super(game, "Cenn's Enlistment", "Modern Masters", "MMA");
  }
}

module.exports = CennsEnlistment;
