"use strict";
const Constants = require ("../../../Constants");
const CennsEnlistmentBase = require("../setMMA/CennsEnlistment");

class CennsEnlistment extends CennsEnlistmentBase {
  constructor (game) {
    super(game, "Cenn's Enlistment", "Eventide", "EVE");
  }
}

module.exports = CennsEnlistment;
