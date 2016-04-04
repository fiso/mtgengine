"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const NecroskitterBase = require("../setEVE/Necroskitter.js");

class Necroskitter extends NecroskitterBase {
  constructor(game) {
    super(game, "Necroskitter", "Modern Masters 2015 Edition", "MM2");
  }
}

module.exports = Necroskitter;
