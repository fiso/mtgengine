"use strict";
const Constants = require ("../../../Constants");
const NecroskitterBase = require("../setEVE/Necroskitter");

class Necroskitter extends NecroskitterBase {
  constructor(game) {
    super(game, "Necroskitter", "Modern Masters 2015 Edition", "MM2");
  }
}

module.exports = Necroskitter;
