"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ScreamingSeahawkBase = require("../setCNS/ScreamingSeahawk.js");

class ScreamingSeahawk extends ScreamingSeahawkBase {
  constructor(game) {
    super(game, "Screaming Seahawk", "Onslaught", "ONS");
  }
}

module.exports = ScreamingSeahawk;
