"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CinderMarshBase = require("../setBRB/CinderMarsh.js");

class CinderMarsh extends CinderMarshBase {
  constructor(game) {
    super(game, "Cinder Marsh", "Tempest", "TMP");
  }
}

module.exports = CinderMarsh;
