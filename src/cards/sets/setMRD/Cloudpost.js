"use strict";
const Constants = require ("../../../Constants");
const CloudpostBase = require("../setF10/Cloudpost");

class Cloudpost extends CloudpostBase {
  constructor (game) {
    super(game, "Cloudpost", "Mirrodin", "MRD");
  }
}

module.exports = Cloudpost;
