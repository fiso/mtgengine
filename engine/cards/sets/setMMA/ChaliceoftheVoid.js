"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ChaliceoftheVoidBase = require("../setMRD/ChaliceoftheVoid.js");

class ChaliceoftheVoid extends ChaliceoftheVoidBase {
  constructor(game) {
    super(game, "Chalice of the Void", "Modern Masters", "MMA");
  }
}

module.exports = ChaliceoftheVoid;
