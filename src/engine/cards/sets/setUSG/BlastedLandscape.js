"use strict";
const Constants = require ("../../../Constants");
const BlastedLandscapeBase = require("../setCM2/BlastedLandscape");

class BlastedLandscape extends BlastedLandscapeBase {
  constructor (game) {
    super(game, "Blasted Landscape", "Urza's Saga", "USG");
  }
}

module.exports = BlastedLandscape;
