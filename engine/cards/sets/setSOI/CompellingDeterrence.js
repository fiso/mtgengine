"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CompellingDeterrenceBase = require("../setDDQ/CompellingDeterrence.js");

class CompellingDeterrence extends CompellingDeterrenceBase {
  constructor(game) {
    super(game, "Compelling Deterrence", "Shadows over Innistrad", "SOI");
  }
}

module.exports = CompellingDeterrence;
