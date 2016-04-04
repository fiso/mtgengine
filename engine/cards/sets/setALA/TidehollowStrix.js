"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const TidehollowStrixBase = require("../setC13/TidehollowStrix.js");

class TidehollowStrix extends TidehollowStrixBase {
  constructor(game) {
    super(game, "Tidehollow Strix", "Shards of Alara", "ALA");
  }
}

module.exports = TidehollowStrix;
