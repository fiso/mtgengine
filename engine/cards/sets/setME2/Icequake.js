"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const IcequakeBase = require("../setICE/Icequake.js");

class Icequake extends IcequakeBase {
  constructor(game) {
    super(game, "Icequake", "Masters Edition II", "ME2");
  }
}

module.exports = Icequake;
