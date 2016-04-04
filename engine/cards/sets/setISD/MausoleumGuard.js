"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MausoleumGuardBase = require("../setDDK/MausoleumGuard.js");

class MausoleumGuard extends MausoleumGuardBase {
  constructor(game) {
    super(game, "Mausoleum Guard", "Innistrad", "ISD");
  }
}

module.exports = MausoleumGuard;
