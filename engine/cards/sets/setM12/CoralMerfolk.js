"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CoralMerfolkBase = require("../setM10/CoralMerfolk.js");

class CoralMerfolk extends CoralMerfolkBase {
  constructor(game) {
    super(game, "Coral Merfolk", "Magic 2012", "M12");
  }
}

module.exports = CoralMerfolk;
