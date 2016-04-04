"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const UrborgMindsuckerBase = require("../setMGB/UrborgMindsucker.js");

class UrborgMindsucker extends UrborgMindsuckerBase {
  constructor(game) {
    super(game, "Urborg Mindsucker", "Visions", "VIS");
  }
}

module.exports = UrborgMindsucker;
