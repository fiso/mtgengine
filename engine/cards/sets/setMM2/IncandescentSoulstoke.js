"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const IncandescentSoulstokeBase = require("../setLRW/IncandescentSoulstoke.js");

class IncandescentSoulstoke extends IncandescentSoulstokeBase {
  constructor(game) {
    super(game, "Incandescent Soulstoke", "Modern Masters 2015 Edition", "MM2");
  }
}

module.exports = IncandescentSoulstoke;
