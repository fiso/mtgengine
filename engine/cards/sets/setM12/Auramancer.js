"use strict";
const Constants = require ("../../../Constants");
const AuramancerBase = require("../setDDL/Auramancer");

class Auramancer extends AuramancerBase {
  constructor(game) {
    super(game, "Auramancer", "Magic 2012", "M12");
  }
}

module.exports = Auramancer;
