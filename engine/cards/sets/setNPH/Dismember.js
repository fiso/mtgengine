"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DismemberBase = require("../setpFNM/Dismember.js");

class Dismember extends DismemberBase {
  constructor(game) {
    super(game, "Dismember", "New Phyrexia", "NPH");
  }
}

module.exports = Dismember;
