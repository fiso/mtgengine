"use strict";
const Constants = require ("../../../Constants");
const GrabtheReinsBase = require("../setC16/GrabtheReins");

class GrabtheReins extends GrabtheReinsBase {
  constructor (game) {
    super(game, "Grab the Reins", "Mirrodin", "MRD");
  }
}

module.exports = GrabtheReins;
