"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const RepealBase = require("../setC15/Repeal.js");

class Repeal extends RepealBase {
  constructor(game) {
    super(game, "Repeal", "Modern Masters 2015 Edition", "MM2");
  }
}

module.exports = Repeal;
