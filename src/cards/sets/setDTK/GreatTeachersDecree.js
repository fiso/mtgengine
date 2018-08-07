"use strict";
const Constants = require ("../../../Constants");
const GreatTeachersDecreeBase = require("../setIMA/GreatTeachersDecree");

class GreatTeachersDecree extends GreatTeachersDecreeBase {
  constructor (game) {
    super(game, "Great Teacher's Decree", "Dragons of Tarkir", "DTK");
  }
}

module.exports = GreatTeachersDecree;
