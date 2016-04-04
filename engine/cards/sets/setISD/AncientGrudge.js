"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const AncientGrudgeBase = require("../setpFNM/AncientGrudge.js");

class AncientGrudge extends AncientGrudgeBase {
  constructor(game) {
    super(game, "Ancient Grudge", "Innistrad", "ISD");
  }
}

module.exports = AncientGrudge;
