"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DismemberBase = require("../setpFNM/Dismember.js");

class Dismember extends DismemberBase {
  constructor(game) {
    super(game, "Dismember", "Modern Event Deck 2014", "MD1");
  }
}

module.exports = Dismember;
