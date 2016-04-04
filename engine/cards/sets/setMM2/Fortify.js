"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const FortifyBase = require("../setM14/Fortify.js");

class Fortify extends FortifyBase {
  constructor(game) {
    super(game, "Fortify", "Modern Masters 2015 Edition", "MM2");
  }
}

module.exports = Fortify;
