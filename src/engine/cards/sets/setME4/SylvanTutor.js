"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SylvanTutor extends UnimplementedCard {
  constructor (game) {
    super(game, "Sylvan Tutor", "Masters Edition IV", "ME4");
  }
}

module.exports = SylvanTutor;
