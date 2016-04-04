"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const HarbingeroftheHuntBase = require("../setDTK/HarbingeroftheHunt.js");

class HarbingeroftheHunt extends HarbingeroftheHuntBase {
  constructor(game) {
    super(game, "Harbinger of the Hunt", "Media Inserts", "pMEI");
  }
}

module.exports = HarbingeroftheHunt;
