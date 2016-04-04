"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DeathlaceBase = require("../setCED/Deathlace.js");

class Deathlace extends DeathlaceBase {
  constructor(game) {
    super(game, "Deathlace", "Fourth Edition", "4ED");
  }
}

module.exports = Deathlace;
