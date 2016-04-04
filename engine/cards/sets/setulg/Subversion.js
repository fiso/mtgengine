"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SubversionBase = require("../setBRB/Subversion.js");

class Subversion extends SubversionBase {
  constructor(game) {
    super(game, "Subversion", "Urza's Legacy", "ULG");
  }
}

module.exports = Subversion;
