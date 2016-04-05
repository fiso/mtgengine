"use strict";
const Constants = require ("../../../Constants");
const ArcaneTeachingsBase = require("../setJUD/ArcaneTeachings");

class ArcaneTeachings extends ArcaneTeachingsBase {
  constructor(game) {
    super(game, "Arcane Teachings", "Tenth Edition", "10E");
  }
}

module.exports = ArcaneTeachings;
