"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const TidingsBase = require("../setpMPR/Tidings.js");

class Tidings extends TidingsBase {
  constructor(game) {
    super(game, "Tidings", "Ninth Edition", "9ED");
  }
}

module.exports = Tidings;
