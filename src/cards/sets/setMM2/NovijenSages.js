"use strict";
const Constants = require ("../../../Constants");
const NovijenSagesBase = require("../setDIS/NovijenSages");

class NovijenSages extends NovijenSagesBase {
  constructor (game) {
    super(game, "Novijen Sages", "Modern Masters 2015 Edition", "MM2");
  }
}

module.exports = NovijenSages;
