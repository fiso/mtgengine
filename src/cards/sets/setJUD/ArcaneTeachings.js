"use strict";
const Constants = require ("../../../Constants");
const ArcaneTeachingsBase = require("../set10E/ArcaneTeachings");

class ArcaneTeachings extends ArcaneTeachingsBase {
  constructor (game) {
    super(game, "Arcane Teachings", "Judgment", "JUD");
  }
}

module.exports = ArcaneTeachings;
