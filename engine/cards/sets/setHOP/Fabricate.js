"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const FabricateBase = require("../setM10/Fabricate.js");

class Fabricate extends FabricateBase {
  constructor(game) {
    super(game, "Fabricate", "Planechase", "HOP");
  }
}

module.exports = Fabricate;
