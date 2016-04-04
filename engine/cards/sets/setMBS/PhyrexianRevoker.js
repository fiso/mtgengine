"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PhyrexianRevokerBase = require("../setM15/PhyrexianRevoker.js");

class PhyrexianRevoker extends PhyrexianRevokerBase {
  constructor(game) {
    super(game, "Phyrexian Revoker", "Mirrodin Besieged", "MBS");
  }
}

module.exports = PhyrexianRevoker;
