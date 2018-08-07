"use strict";
const Constants = require ("../../../Constants");
const CloudpostBase = require("../setF10/Cloudpost");

class Cloudpost extends CloudpostBase {
  constructor (game) {
    super(game, "Cloudpost", "Magic Online Promos", "PRM");
  }
}

module.exports = Cloudpost;
