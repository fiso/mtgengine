"use strict";
const Constants = require ("../../../Constants");
const GreenWardBase = require("../setCED/GreenWard");

class GreenWard extends GreenWardBase {
  constructor(game) {
    super(game, "Green Ward", "Fourth Edition", "4ED");
  }
}

module.exports = GreenWard;
