"use strict";
const Constants = require ("../../../Constants");
const SkywiseTeachingsBase = require("../setIMA/SkywiseTeachings");

class SkywiseTeachings extends SkywiseTeachingsBase {
  constructor (game) {
    super(game, "Skywise Teachings", "Dragons of Tarkir", "DTK");
  }
}

module.exports = SkywiseTeachings;
