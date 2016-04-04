"use strict";
const Constants = require ("../../../Constants");
const ScreamingSeahawkBase = require("../setCNS/ScreamingSeahawk");

class ScreamingSeahawk extends ScreamingSeahawkBase {
  constructor(game) {
    super(game, "Screaming Seahawk", "Onslaught", "ONS");
  }
}

module.exports = ScreamingSeahawk;
