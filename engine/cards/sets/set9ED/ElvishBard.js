"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ElvishBardBase = require("../setALL/ElvishBard.js");

class ElvishBard extends ElvishBardBase {
  constructor(game) {
    super(game, "Elvish Bard", "Ninth Edition", "9ED");
  }
}

module.exports = ElvishBard;
