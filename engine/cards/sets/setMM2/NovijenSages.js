"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const NovijenSagesBase = require("../setDIS/NovijenSages.js");

class NovijenSages extends NovijenSagesBase {
  constructor(game) {
    super(game, "Novijen Sages", "Modern Masters 2015 Edition", "MM2");
  }
}

module.exports = NovijenSages;
