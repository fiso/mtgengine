"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MadScienceFairProject extends UnimplementedCard {
  constructor (game) {
    super(game, "Mad Science Fair Project", "Unstable", "UST");
  }
}

module.exports = MadScienceFairProject;
