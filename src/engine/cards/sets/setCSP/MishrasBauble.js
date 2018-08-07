"use strict";
const Constants = require ("../../../Constants");
const MishrasBaubleBase = require("../setIMA/MishrasBauble");

class MishrasBauble extends MishrasBaubleBase {
  constructor (game) {
    super(game, "Mishra's Bauble", "Coldsnap", "CSP");
  }
}

module.exports = MishrasBauble;
