"use strict";
const Constants = require ("../../../Constants");
const CinderMarshBase = require("../setBRB/CinderMarsh");

class CinderMarsh extends CinderMarshBase {
  constructor(game) {
    super(game, "Cinder Marsh", "Tempest Remastered", "TPR");
  }
}

module.exports = CinderMarsh;
