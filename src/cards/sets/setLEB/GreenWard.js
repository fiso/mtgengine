"use strict";
const Constants = require ("../../../Constants");
const GreenWardBase = require("../set4ED/GreenWard");

class GreenWard extends GreenWardBase {
  constructor (game) {
    super(game, "Green Ward", "Limited Edition Beta", "LEB");
  }
}

module.exports = GreenWard;
