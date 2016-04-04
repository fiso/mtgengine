"use strict";
const Constants = require ("../../../Constants");
const ElvishEulogistBase = require("../setDD3_EVG/ElvishEulogist");

class ElvishEulogist extends ElvishEulogistBase {
  constructor(game) {
    super(game, "Elvish Eulogist", "Lorwyn", "LRW");
  }
}

module.exports = ElvishEulogist;
