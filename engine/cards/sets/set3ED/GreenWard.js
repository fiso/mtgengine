"use strict";
const Constants = require ("../../../Constants");
const GreenWardBase = require("../setCED/GreenWard");

class GreenWard extends GreenWardBase {
  constructor(game) {
    super(game, "Green Ward", "Revised Edition", "3ED");
  }
}

module.exports = GreenWard;
