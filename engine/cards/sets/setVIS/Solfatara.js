"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Solfatara extends UnimplementedCard {
  constructor(game) {
    super(game, "Solfatara", "Visions", "VIS");
  }
}

module.exports = Solfatara;
