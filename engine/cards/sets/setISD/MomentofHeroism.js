"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MomentofHeroismBase = require("../setDDL/MomentofHeroism.js");

class MomentofHeroism extends MomentofHeroismBase {
  constructor(game) {
    super(game, "Moment of Heroism", "Innistrad", "ISD");
  }
}

module.exports = MomentofHeroism;
