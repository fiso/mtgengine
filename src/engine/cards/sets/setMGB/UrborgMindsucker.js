"use strict";
const Constants = require ("../../../Constants");
const UrborgMindsuckerBase = require("../setVIS/UrborgMindsucker");

class UrborgMindsucker extends UrborgMindsuckerBase {
  constructor (game) {
    super(game, "Urborg Mindsucker", "Multiverse Gift Box", "MGB");
  }
}

module.exports = UrborgMindsucker;
