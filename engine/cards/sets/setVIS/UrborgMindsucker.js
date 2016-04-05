"use strict";
const Constants = require ("../../../Constants");
const UrborgMindsuckerBase = require("../setMGB/UrborgMindsucker");

class UrborgMindsucker extends UrborgMindsuckerBase {
  constructor(game) {
    super(game, "Urborg Mindsucker", "Visions", "VIS");
  }
}

module.exports = UrborgMindsucker;
