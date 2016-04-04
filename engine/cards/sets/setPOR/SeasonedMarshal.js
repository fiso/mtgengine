"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SeasonedMarshalBase = require("../setBRB/SeasonedMarshal.js");

class SeasonedMarshal extends SeasonedMarshalBase {
  constructor(game) {
    super(game, "Seasoned Marshal", "Portal", "POR");
  }
}

module.exports = SeasonedMarshal;
