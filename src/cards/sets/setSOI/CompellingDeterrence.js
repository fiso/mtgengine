"use strict";
const Constants = require ("../../../Constants");
const CompellingDeterrenceBase = require("../setDDQ/CompellingDeterrence");

class CompellingDeterrence extends CompellingDeterrenceBase {
  constructor (game) {
    super(game, "Compelling Deterrence", "Shadows over Innistrad", "SOI");
  }
}

module.exports = CompellingDeterrence;
