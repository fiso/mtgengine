"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const HeliumSquirterBase = require("../setDIS/HeliumSquirter.js");

class HeliumSquirter extends HeliumSquirterBase {
  constructor(game) {
    super(game, "Helium Squirter", "Modern Masters 2015 Edition", "MM2");
  }
}

module.exports = HeliumSquirter;
