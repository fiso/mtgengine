"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const LeylineofSanctityBase = require("../setM11/LeylineofSanctity.js");

class LeylineofSanctity extends LeylineofSanctityBase {
  constructor(game) {
    super(game, "Leyline of Sanctity", "Modern Masters 2015 Edition", "MM2");
  }
}

module.exports = LeylineofSanctity;
