"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const OverwhelmBase = require("../setM15/Overwhelm.js");

class Overwhelm extends OverwhelmBase {
  constructor(game) {
    super(game, "Overwhelm", "Modern Masters 2015 Edition", "MM2");
  }
}

module.exports = Overwhelm;
