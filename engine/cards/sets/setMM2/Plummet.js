"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PlummetBase = require("../setARC/Plummet.js");

class Plummet extends PlummetBase {
  constructor(game) {
    super(game, "Plummet", "Modern Masters 2015 Edition", "MM2");
  }
}

module.exports = Plummet;
