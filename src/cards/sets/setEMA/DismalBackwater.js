"use strict";
const Constants = require ("../../../Constants");
const DismalBackwaterBase = require("../setDDQ/DismalBackwater");

class DismalBackwater extends DismalBackwaterBase {
  constructor (game) {
    super(game, "Dismal Backwater", "Eternal Masters", "EMA");
  }
}

module.exports = DismalBackwater;
