"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const KamiofAncientLawBase = require("../setCHK/KamiofAncientLaw.js");

class KamiofAncientLaw extends KamiofAncientLawBase {
  constructor(game) {
    super(game, "Kami of Ancient Law", "Modern Masters 2015 Edition", "MM2");
  }
}

module.exports = KamiofAncientLaw;
