"use strict";
const Constants = require ("../../../Constants");
const SevertheBloodlineBase = require("../setCMA/SevertheBloodline");

class SevertheBloodline extends SevertheBloodlineBase {
  constructor (game) {
    super(game, "Sever the Bloodline", "Modern Masters 2017", "MM3");
  }
}

module.exports = SevertheBloodline;
