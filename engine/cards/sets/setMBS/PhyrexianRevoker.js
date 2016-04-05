"use strict";
const Constants = require ("../../../Constants");
const PhyrexianRevokerBase = require("../setM15/PhyrexianRevoker");

class PhyrexianRevoker extends PhyrexianRevokerBase {
  constructor(game) {
    super(game, "Phyrexian Revoker", "Mirrodin Besieged", "MBS");
  }
}

module.exports = PhyrexianRevoker;
