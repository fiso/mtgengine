"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MissDemeanor extends UnimplementedCard {
  constructor (game) {
    super(game, "Miss Demeanor", "Unglued", "UGL");
  }
}

module.exports = MissDemeanor;
