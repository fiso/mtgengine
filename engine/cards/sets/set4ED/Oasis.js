"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const OasisBase = require("../setARN/Oasis.js");

class Oasis extends OasisBase {
  constructor(game) {
    super(game, "Oasis", "Fourth Edition", "4ED");
  }
}

module.exports = Oasis;
