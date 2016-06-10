"use strict";
const Constants = require ("../../../Constants");
const MomentofHeroismBase = require("../setDDL/MomentofHeroism");

class MomentofHeroism extends MomentofHeroismBase {
  constructor (game) {
    super(game, "Moment of Heroism", "Innistrad", "ISD");
  }
}

module.exports = MomentofHeroism;
