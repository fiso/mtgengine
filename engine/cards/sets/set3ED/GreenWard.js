"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GreenWardBase = require("../setCED/GreenWard.js");

class GreenWard extends GreenWardBase {
  constructor(game) {
    super(game, "Green Ward", "Revised Edition", "3ED");
  }
}

module.exports = GreenWard;
