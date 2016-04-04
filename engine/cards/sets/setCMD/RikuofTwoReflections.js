"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const RikuofTwoReflectionsBase = require("../setpJGP/RikuofTwoReflections.js");

class RikuofTwoReflections extends RikuofTwoReflectionsBase {
  constructor(game) {
    super(game, "Riku of Two Reflections", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = RikuofTwoReflections;
