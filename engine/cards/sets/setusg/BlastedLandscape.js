"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BlastedLandscapeBase = require("../setC15/BlastedLandscape.js");

class BlastedLandscape extends BlastedLandscapeBase {
  constructor(game) {
    super(game, "Blasted Landscape", "Urza's Saga", "USG");
  }
}

module.exports = BlastedLandscape;
