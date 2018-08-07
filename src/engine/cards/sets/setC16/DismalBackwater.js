"use strict";
const Constants = require ("../../../Constants");
const DismalBackwaterBase = require("../setC18/DismalBackwater");

class DismalBackwater extends DismalBackwaterBase {
  constructor (game) {
    super(game, "Dismal Backwater", "Commander 2016", "C16");
  }
}

module.exports = DismalBackwater;
